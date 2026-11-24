import { ContactForm } from "@/components/contact/contact-form";
import { FactList, PageIntro } from "@/components/ui/section";
import { unconfirmedFacts } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Send a business inquiry, tokenization consultation, or technical partnership note to Futuristic World.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Discuss a project."
        lede="Use this form for a business inquiry, a tokenization consultation, or a technical partnership. It is not an investment channel."
      />
      <div className="grid w-full gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <ContactForm />
        <aside className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-navy">What happens next</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              In production, messages go to the webhook configured with CONTACT_WEBHOOK_URL. In local development,
              without that variable, they are written to a gitignored file on the machine running the site. The form
              tells you which of those happened.
            </p>
          </div>
          <FactList facts={unconfirmedFacts} />
        </aside>
      </div>
    </>
  );
}
