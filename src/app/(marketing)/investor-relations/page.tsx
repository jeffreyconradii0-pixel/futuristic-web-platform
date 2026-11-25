import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Investor Relations",
  description: "Factual company information. Not a securities or token offering.",
  path: "/investor-relations",
});

export default function InvestorRelationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Investor Relations"
        title="Informational company profile"
        lede="Not a solicitation to invest or buy tokens."
      />
      <Container className="space-y-10 py-16 lg:py-20">
        <p className="max-w-3xl text-base leading-8 text-muted">{site.companyDescription}</p>
        <aside className="max-w-3xl rounded-lg border border-line bg-paper p-6 text-sm leading-7 text-muted">
          {site.disclaimer}
        </aside>
        <ButtonLink href="/contact">Request materials</ButtonLink>
      </Container>
    </>
  );
}