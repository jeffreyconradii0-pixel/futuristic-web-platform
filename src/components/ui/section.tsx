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
    <header className="surface-dark border-b border-line text-paper">
      <div className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-cyan-accent">{eyebrow.toUpperCase()}</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-paper/80 sm:text-xl">{lede}</p>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold tracking-[0.2em] ${light ? "text-cyan-accent" : "text-deep-blue"}`}
        >
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${light ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-paper/75" : "text-muted"}`}>{text}</p>
      ) : null}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-deep-blue underline decoration-cyan-accent decoration-2 underline-offset-4 hover:text-ink"
    >
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
    <dl className="divide-y divide-line border-y border-line">
      {facts.map((fact) => (
        <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted">{fact.label}</dt>
          <dd className="text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}