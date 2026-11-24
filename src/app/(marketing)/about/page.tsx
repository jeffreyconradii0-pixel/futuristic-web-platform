import { PageIntro, FactList } from "@/components/ui/section";
import { site, unconfirmedFacts } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: site.companyDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A technology company, described only as far as the record goes."
        lede={site.companyDescription}
      />
      <div className="grid w-full gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">
        <div className="space-y-5 text-base leading-8 text-ink">
          <p>
            The positioning is digital assets and blockchain technologies. The work is infrastructure and
            tokenization technology for businesses and emerging projects. Where a fact is not confirmed — a
            license, an audit, a customer, an office — it is left unpublished.
          </p>
          <p>{site.servicesDescription}</p>
          <p>
            Leadership biographies, a founding date, and a headcount are not on this page because they have
            not been supplied as verified public facts. They can be added in the content files when they are.
          </p>
        </div>
        <aside>
          <h2 className="font-serif text-2xl text-navy">Published company facts</h2>
          <div className="mt-4">
            <FactList facts={unconfirmedFacts} />
          </div>
        </aside>
      </div>
    </>
  );
}
