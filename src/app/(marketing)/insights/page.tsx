import Link from "next/link";
import { PageIntro } from "@/components/ui/section";
import { insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Notes from Futuristic World on tokenization infrastructure, scoping technical work, and reading project claims carefully.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Notes on the work, not a newsroom."
        lede="Short original notes about how this site talks about tokenization technology. They are not market commentary and not investment research."
      />
      <ul className="w-full divide-y divide-ink/10 border-y border-ink/10 px-6 sm:px-10 lg:px-16">
        {insights.map((article) => (
          <li key={article.slug}>
            <Link href={`/insights/${article.slug}`} className="block py-8">
              <p className="text-xs tracking-[0.16em] text-muted">
                {article.kicker.toUpperCase()} · <time dateTime={article.published}>{article.published}</time>
              </p>
              <h2 className="mt-3 font-serif text-3xl text-navy">{article.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
