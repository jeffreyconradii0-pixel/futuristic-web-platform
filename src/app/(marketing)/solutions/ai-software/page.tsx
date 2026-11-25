import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro, TextLink } from "@/components/ui/section";
import { pillars } from "@/content/pillars";
import { createMetadata } from "@/lib/seo";

const pillar = pillars[1];

export const metadata = createMetadata({
  title: pillar.title,
  description: pillar.summary,
  path: pillar.href,
});

export default function AiSoftwareSolutionsPage() {
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
        <p className="mt-10 max-w-3xl text-sm leading-7 text-muted">
          AI features are deployed with retrieval boundaries, logging, and human review paths suited to the data
          sensitivity of each product. We document what models can and cannot access before production rollout.
        </p>
        <p className="mt-6">
          <TextLink href="/solutions">Back to solutions overview</TextLink>
        </p>
      </Container>
      <CTASection />
    </>
  );
}