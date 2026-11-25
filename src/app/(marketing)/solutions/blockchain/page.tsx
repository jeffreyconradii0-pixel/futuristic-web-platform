import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro, TextLink } from "@/components/ui/section";
import { pillars } from "@/content/pillars";
import { createMetadata } from "@/lib/seo";

const pillar = pillars[0];

export const metadata = createMetadata({
  title: pillar.title,
  description: pillar.summary,
  path: pillar.href,
});

export default function BlockchainSolutionsPage() {
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
          We do not claim token issuance, exchange operation, or regulatory approval unless counsel and operations
          confirm it. Smart-contract testing in our workflow is not a substitute for third-party security audits unless
          explicitly contracted.
        </p>
        <p className="mt-6">
          <TextLink href="/solutions">Back to solutions overview</TextLink>
        </p>
      </Container>
      <CTASection />
    </>
  );
}