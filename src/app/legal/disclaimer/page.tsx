import { PageIntro } from "@/components/ui/section";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: site.disclaimer,
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Disclaimer" lede={site.disclaimer} />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-base leading-8 sm:px-8">
        <p>
          Nothing on this website is a recommendation to buy, sell, or hold any asset. Nothing here is an offer,
          a solicitation, or a commitment to provide a regulated service.
        </p>
        <p>
          Digital-asset activity can be regulated differently depending on what is being done and where. Futuristic
          World does not claim a license, a registration, or an approval on this website. Anyone considering a
          tokenization project should obtain independent legal advice before starting it.
        </p>
        <p>
          Descriptions of possible future products, including Token Factory, are concepts. They are not available
          features, and they are not a promise that a product will ship.
        </p>
        <p>
          This text is a general website notice. It has not been represented as a formal opinion from counsel, and
          it should be reviewed before the company relies on it in a regulated activity.
        </p>
      </div>
    </>
  );
}
