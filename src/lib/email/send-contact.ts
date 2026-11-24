import { inquiryLabel, type ContactInput } from "@/lib/validation/contact";

export type DeliveryMode = "webhook" | "development-log";

type Delivered = {
  ok: true;
  delivery: DeliveryMode;
};

function messageBody(input: ContactInput) {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    inquiryType: input.inquiryType,
    inquiryLabel: inquiryLabel(input.inquiryType),
    message: input.message.trim(),
    receivedAt: new Date().toISOString(),
  };
}

async function sendWebhook(input: ContactInput) {
  const response = await fetch(process.env.CONTACT_WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_TOKEN
        ? { authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify(messageBody(input)),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`);
  }
}

async function writeDevelopmentLog(input: ContactInput) {
  const { appendFile, mkdir } = await import("node:fs/promises");
  const path = await import("node:path");
  const directory = path.join(process.cwd(), ".data");
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, "contact-submissions.jsonl"),
    `${JSON.stringify(messageBody(input))}\n`,
    "utf8",
  );
}

export async function deliverContact(input: ContactInput): Promise<Delivered> {
  if (process.env.CONTACT_WEBHOOK_URL) {
    await sendWebhook(input);
    return { ok: true, delivery: "webhook" };
  }

  if (process.env.NODE_ENV !== "production") {
    await writeDevelopmentLog(input);
    return { ok: true, delivery: "development-log" };
  }

  throw new Error("UNCONFIGURED");
}
