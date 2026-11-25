import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { FactList, PageIntro } from "@/components/ui/section";
import { companyFacts, site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Send a business inquiry or technical partnership note to Futuristic World.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Discuss a project"
        lede="Business inquiries, engineering partnerships, or product collaborations. Not an investment or token-sales channel."
      />
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <ContactForm />
        <aside className="space-y-8">
          <div className="surface-panel rounded-lg p-6">
            <h2 className="text-xl font-semibold text-ink">Direct email</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              <a href={`mailto:${site.contactEmail}`} className="font-semibold text-deep-blue hover:underline">
                {site.contactEmail}
              </a>
            </p>
          </div>
          <FactList facts={companyFacts} />
        </aside>
      </Container>
    </>
  );
}