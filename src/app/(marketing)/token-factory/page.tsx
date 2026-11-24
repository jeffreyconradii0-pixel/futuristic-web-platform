import Link from "next/link";
import { BoundaryList, PageIntro } from "@/components/ui/section";
import { factoryDirections, factoryLimits } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Token Factory",
  description:
    "Token Factory is a product concept for a later release. It is not a live issuance platform.",
  path: "/token-factory",
});

export default function TokenFactoryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Concept · not a live product"
        title="Token Factory is a direction, not a system you can use today."
        lede="The idea is a later product for teams that need a controlled way to prepare tokenization workflows. This page exists so that direction is explicit. There is no login, no deployment, and no asset movement here."
      />
      <div className="grid w-full gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <div className="space-y-8">
          {factoryDirections.map((item) => (
            <article key={item.title}>
              <h2 className="font-serif text-2xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
          <Link href="/contact" className="inline-block bg-navy px-5 py-3 text-sm font-semibold text-paper">
            Discuss whether this direction fits
          </Link>
        </div>
        <BoundaryList title="Unavailable in this release" items={factoryLimits} />
      </div>
    </>
  );
}
