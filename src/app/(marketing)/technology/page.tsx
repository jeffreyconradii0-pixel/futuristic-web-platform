import Link from "next/link";
import { PageIntro } from "@/components/ui/section";
import { capabilities } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "How Futuristic World approaches tokenization systems, smart contracts, multi-chain architecture, and product infrastructure.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Technology"
        title="Architecture and implementation, without a fake control panel."
        lede="The technology practice covers the design, build, and test of digital-asset systems. This page describes that practice. It is not a dashboard, and it does not show live network data."
      />
      <div className="w-full space-y-12 px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="border border-ink/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <section className="max-w-3xl space-y-4 text-base leading-8">
          <h2 className="font-serif text-3xl text-navy">How testing is described</h2>
          <p>
            Work we build is tested against the behavior written in the scope. That is an internal engineering
            practice. It is not a statement that a system has been audited, certified, or reviewed by a regulator.
          </p>
          <p>
            A later product can sit behind this website. The current codebase keeps marketing pages, content, and the
            inquiry endpoint separate so a token factory or customer portal can be added without turning this release
            into one.
          </p>
          <Link href="/contact" className="inline-block text-sm font-semibold text-navy underline decoration-cyan underline-offset-4">
            Talk about a technical scope
          </Link>
        </section>
      </div>
    </>
  );
}
