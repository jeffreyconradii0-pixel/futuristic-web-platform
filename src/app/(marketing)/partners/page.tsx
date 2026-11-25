import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Partners",
  description: "Confirmed Futuristic World partnerships only.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Partners"
        title="Collaborations we can name"
        lede="Logos and names appear only with written permission."
      />
      <Container className="py-16 lg:py-20">
        <div className="surface-panel max-w-3xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-ink">No partner logos published yet</h2>
          <ButtonLink href="/contact" variant="secondary" className="mt-6 border-ink/15 bg-paper text-ink">
            Partnership inquiry
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}