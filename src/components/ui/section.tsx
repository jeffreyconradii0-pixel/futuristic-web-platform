import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue">{eyebrow.toUpperCase()}</p>
        <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-tight tracking-tight text-navy sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{lede}</p>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.2em] text-blue">{eyebrow.toUpperCase()}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted">{text}</p> : null}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="text-sm font-semibold text-navy underline decoration-cyan decoration-2 underline-offset-4">
      {children}
    </Link>
  );
}

export function FactList({
  facts,
}: {
  facts: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="divide-y divide-ink/10 border-y border-ink/10">
      {facts.map((fact) => (
        <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted">{fact.label}</dt>
          <dd className="text-navy">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BoundaryList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className="border border-ink/10 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-ink">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
