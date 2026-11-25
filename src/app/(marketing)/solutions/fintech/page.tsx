import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro, TextLink } from "@/components/ui/section";
import { site } from "@/config/site";
import { pillars } from "@/content/pillars";
import { createMetadata } from "@/lib/seo";

const pillar = pillars[2];

export const metadata = createMetadata({
  title: pillar.title,
  description: pillar.summary,
  path: pillar.href,
});

export default function FintechSolutionsPage() {
  return (
    <>
      <PageIntro eyebrow="Solutions" title={pillar.title} lede={pillar.summary} />
      <Container className="py-16 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink">Example capabilities</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {pillar.capabilities.map((item) => (
            <li key={item} className="surface-panel rounded-lg p-5 text-sm leading-7 text-muted">
              {item}
            </li>
          ))}
        </ul>
        <aside className="mt-10 max-w-3xl rounded-lg border border-line bg-paper p-6 text-sm leading-7 text-muted">
          {site.riskDisclosure}
        </aside>
        <p className="mt-6">
          <TextLink href="/solutions">Back to solutions overview</TextLink>
        </p>
      </Container>
      <CTASection />
    </>
  );
}