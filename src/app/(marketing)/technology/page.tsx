import { CTASection } from "@/components/marketing/cta-section";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { engineeringPractices, technologyGroups } from "@/content/technology";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "Engineering capabilities across blockchain, AI, web applications, financial data tooling, and cloud operations at Futuristic World.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Technology"
        title="Stacks, practices, and security posture"
        lede="We document what we actually build with. Certifications and third-party audits are listed only when they exist."
      />
      <Container className="space-y-16 py-16 lg:py-20">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <article key={group.title} className="surface-panel rounded-lg p-6">
              <h2 className="text-lg font-semibold text-ink">{group.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-line bg-cool-gray px-2.5 py-1 text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-ink">Engineering process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {engineeringPractices.map((practice) => (
              <article key={practice.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="text-lg font-semibold text-ink">{practice.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{practice.text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/contact" className="mt-8">
            Talk about a technical scope
          </ButtonLink>
        </section>
      </Container>
      <CTASection />
    </>
  );
}