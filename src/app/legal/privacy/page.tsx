import { PageIntro } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "What the Futuristic World contact form collects, why, and where a message goes when email delivery is configured.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy"
        lede="This notice covers the current website. The legal entity that will act as controller has not been published yet."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-base leading-8 sm:px-8">
        <section>
          <h2 className="font-serif text-2xl text-navy">What the form collects</h2>
          <p className="mt-3">
            Name, email address, inquiry type, message, a required consent confirmation, and an optional company
            name. A hidden field is used to reject automated submissions. The site does not ask for wallet
            addresses, government identifiers, or payment details.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-navy">Why</h2>
          <p className="mt-3">
            The fields are used to read and reply to the inquiry. They are not used to build an advertising
            profile, and this version of the site does not run analytics cookies.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-navy">Where it goes</h2>
          <p className="mt-3">
            If CONTACT_WEBHOOK_URL is set, the submission is sent to that endpoint over HTTPS. In local
            development without that variable, the submission is appended to a file on the machine running the
            site and is not emailed. In production without a webhook, the form refuses the message instead of
            storing it silently.
          </p>
          <p className="mt-3">
            Rate limiting uses the request IP in memory for a short window and does not write that address into
            the inquiry record.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-navy">What is still unpublished</h2>
          <p className="mt-3">
            The controller’s legal name, postal address, retention period, and a dedicated privacy contact are
            placeholders until they are confirmed. Do not treat this page as a finished privacy policy for a
            regulated business.
          </p>
        </section>
      </div>
    </>
  );
}
