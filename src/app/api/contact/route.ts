import { NextResponse } from "next/server";
import { deliverContact } from "@/lib/email/send-contact";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 20_000) {
    return NextResponse.json(
      { ok: false, message: "The message is too large." },
      { status: 413 },
    );
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, message: "Too many messages from this network. Try again later." },
      { status: 429, headers: { "retry-after": String(limit.retryAfter) } },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The message could not be read." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (parsed.data.website.trim()) {
    return NextResponse.json(
      { ok: false, message: "The message could not be accepted." },
      { status: 400 },
    );
  }

  try {
    const result = await deliverContact(parsed.data);
    return NextResponse.json(result, { headers: { "cache-control": "no-store" } });
  } catch (error) {
    if (error instanceof Error && error.message === "UNCONFIGURED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "This form is not connected to an inbox yet. Set CONTACT_WEBHOOK_URL before production use.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { ok: false, message: "The message was not delivered. Nothing was sent." },
      { status: 502 },
    );
  }
}
