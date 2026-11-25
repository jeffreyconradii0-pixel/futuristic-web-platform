import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Futuristic World website.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Use" lede="Terms governing use of this marketing website." />
      <Container className="max-w-3xl space-y-6 py-16 text-sm leading-7 text-muted lg:py-20">
        <p>Content on {site.url} is informational. It is not an offer of regulated financial services.</p>
        <p>
          Questions:{" "}
          <a href={`mailto:${site.contactEmail}`} className="text-deep-blue hover:underline">
            {site.contactEmail}
          </a>
        </p>
      </Container>
    </>
  );
}