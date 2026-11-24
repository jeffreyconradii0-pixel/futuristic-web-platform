import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) {
    return {};
  }
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) {
    notFound();
  }

  const others = insights.filter((item) => item.slug !== article.slug);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-blue">
        {article.kicker.toUpperCase()}
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">{article.title}</h1>
      <p className="mt-4 text-sm text-muted">
        <time dateTime={article.published}>{article.published}</time>
        <span> · Futuristic World</span>
      </p>
      <div className="mt-10 space-y-8">
        {article.sections.map((section) => (
          <section key={section.heading ?? section.paragraphs[0]}>
            {section.heading ? (
              <h2 className="font-serif text-2xl text-navy">{section.heading}</h2>
            ) : null}
            <div className="mt-3 space-y-4 text-base leading-8">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <aside className="mt-14 border-t border-ink/10 pt-8">
        <h2 className="text-sm font-semibold tracking-[0.16em] text-muted">OTHER NOTES</h2>
        <ul className="mt-4 space-y-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/insights/${item.slug}`} className="text-navy underline decoration-cyan underline-offset-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
