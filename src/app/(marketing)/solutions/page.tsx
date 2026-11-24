import Link from "next/link";
import { BoundaryList, PageIntro } from "@/components/ui/section";
import { serviceBoundaries } from "@/content/pages";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Technology services for tokenization, smart-contract development, and blockchain architecture. Not legal advice, custody, or brokerage.",
  path: "/solutions",
});

const areas = [
  {
    href: "/solutions/tokenization",
    title: "Tokenization services",
    text: "Technical planning and implementation for a tokenization initiative, including the limits of what a technology firm will and will not do.",
  },
  {
    href: "/technology",
    title: "Technology",
    text: "Architecture, smart-contract development, testing, and the product foundations a later system would need.",
  },
  {
    href: "/token-factory",
    title: "Token Factory",
    text: "A concept for a future product. Described so the direction is clear, and labeled so it is not mistaken for a live system.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Services for teams that need the technology, not a slogan."
        lede={site.servicesDescription}
      />
      <div className="grid w-full gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <div className="space-y-4">
          {areas.map((area) => (
            <article key={area.href} className="border border-ink/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-navy">{area.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{area.text}</p>
              <Link
                href={area.href}
                className="mt-4 inline-block text-sm font-semibold text-navy underline decoration-cyan underline-offset-4"
              >
                Open
              </Link>
            </article>
          ))}
        </div>
        <BoundaryList title="Outside the engagement" items={serviceBoundaries} />
      </div>
    </>
  );
}
