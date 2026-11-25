import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description: "Careers at Futuristic World. Open roles are published when available.",
  path: "/careers",
});

const culture = [
  { title: "Remote-first engineering", text: "Deep work, written decisions, and async collaboration." },
  { title: "Evidence in the loop", text: "Demos and architecture notes over meeting volume." },
  { title: "Honest scopes", text: "We decline misrepresented regulatory or client claims." },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Careers"
        title="Build systems that earn trust"
        lede="We hire for precision. Role descriptions appear only when a search is active."
      />
      <Container className="space-y-12 py-16 lg:py-20">
        <div className="surface-panel max-w-3xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-ink">No active listings published</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            When a role opens, it will include responsibilities, stack, and location policy.
          </p>
          <ButtonLink href="/contact" className="mt-6">
            Introduce yourself
          </ButtonLink>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {culture.map((item) => (
            <li key={item.title} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">
          <a href={`mailto:${site.contactEmail}`} className="text-deep-blue hover:underline">
            {site.contactEmail}
          </a>
        </p>
      </Container>
    </>
  );
}