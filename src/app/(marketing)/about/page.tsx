import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { FactList, PageIntro } from "@/components/ui/section";
import { companyFacts, companyPrinciples, site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: site.companyDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Technology company. Clear boundaries." lede={site.companyDescription} />
      <Container className="grid gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-ink">Mission</h2>
            <p className="mt-3 text-base leading-8 text-muted">{site.mission}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Vision</h2>
            <p className="mt-3 text-base leading-8 text-muted">{site.vision}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Operating principles</h2>
            <ul className="mt-6 grid gap-4">
              {companyPrinciples.map((principle) => (
                <li key={principle.title} className="surface-panel rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{principle.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside>
          <h2 className="text-2xl font-semibold text-ink">Company facts</h2>
          <div className="mt-4">
            <FactList facts={companyFacts} />
          </div>
        </aside>
      </Container>
      <CTASection />
    </>
  );
}