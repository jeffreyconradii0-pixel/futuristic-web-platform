import Link from "next/link";
import { BoundaryList, PageIntro } from "@/components/ui/section";
import { serviceBoundaries, tokenizationFaq } from "@/content/pages";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tokenization services",
  description: site.servicesDescription,
  path: "/solutions/tokenization",
});

export default function TokenizationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tokenization"
        title="Tokenization technology, scoped before it is built."
        lede={site.servicesDescription}
      />
      <div className="grid w-full gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <div className="space-y-10">
          <section className="space-y-4 text-base leading-8">
            <h2 className="font-serif text-3xl text-navy">What the work covers</h2>
            <p>
              An engagement can include early architecture, a written model of the records involved, smart-contract
              development, and tests for the behavior that was agreed. It can also stop at a technical assessment if
              that is all the project is ready for.
            </p>
            <p>
              The result is documentation and software for the scoped problem. It is not a license, a listing, or a
              distribution channel.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy">Questions that come up</h2>
            <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {tokenizationFaq.map((item) => (
                <details key={item.question} className="py-4">
                  <summary className="cursor-pointer text-base font-medium text-navy">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <Link href="/contact" className="inline-block bg-navy px-5 py-3 text-sm font-semibold text-paper">
            Discuss a tokenization project
          </Link>
        </div>
        <BoundaryList title="Not part of this service" items={serviceBoundaries} />
      </div>
    </>
  );
}
