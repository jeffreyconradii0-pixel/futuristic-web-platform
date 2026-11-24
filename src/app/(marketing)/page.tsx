import Image from "next/image";
import Link from "next/link";
import { Boxes, FileCode2, Layers, Waypoints } from "lucide-react";
import { insights } from "@/content/insights";
import { capabilities, heroPlates, processSteps, tracks } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = createMetadata({
  title: site.positioning,
  description: site.description,
  path: "/",
});

const icons = {
  layers: Layers,
  contracts: FileCode2,
  network: Waypoints,
  infrastructure: Boxes,
} as const;

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 min-h-svh text-paper">
        <Image
          src="/images/hero-hall.jpg"
          alt="A dark marble hall with gold veining and a single shaft of light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
        <div className="pointer-events-none absolute inset-4 border border-gold/50 sm:inset-6 lg:inset-8" />
        <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-gold sm:left-6 sm:top-6 lg:left-8 lg:top-8" />
        <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-gold sm:right-6 sm:top-6 lg:right-8 lg:top-8" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b-2 border-l-2 border-gold sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-gold sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8" />
        <div className="relative flex min-h-svh w-full flex-col justify-end px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pb-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan">
            {site.positioning.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-6xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-paper/90 sm:text-xl">
            We develop digital asset and blockchain technology solutions that help businesses and
            emerging projects explore, build, and manage tokenization initiatives.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="bg-cyan px-6 py-3.5 text-center text-sm font-semibold text-navy">
              Discuss a Project
            </Link>
            <Link
              href="/technology"
              className="border border-white/40 bg-navy/30 px-6 py-3.5 text-center text-sm font-semibold text-paper backdrop-blur-sm"
            >
              Explore Our Technology
            </Link>
          </div>
          <ul className="mt-12 grid border border-white/15 sm:grid-cols-3">
            {heroPlates.map((item) => (
              <li key={item.label} className="border-b border-white/10 px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <p className="text-sm font-semibold text-cyan">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-paper/75">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[28rem] lg:min-h-[40rem]">
            <Image
              src="/images/glass-sculpture.jpg"
              alt="Abstract sculpture of glass planes and brushed metal on a navy plinth"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.22em] text-blue">CAPABILITIES</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-tight text-navy sm:text-6xl">
              Technology work, stated narrowly
            </h2>
            <ul className="mt-10 divide-y divide-ink/10">
              {capabilities.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                    <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-navy" />
                    <div>
                      <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative text-paper">
        <Image
          src="/images/night-towers.jpg"
          alt="Glass towers across a river at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative w-full px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-gold">THE WORK</p>
          <h2 className="mt-3 max-w-3xl font-serif text-5xl tracking-tight sm:text-6xl">
            Three separate tracks
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {tracks.map((track) => (
              <article key={track.title} className="flex flex-col border border-white/15 bg-navy/55 p-6 backdrop-blur-md">
                <p className="text-xs tracking-[0.18em] text-gold">{track.index}</p>
                <h3 className="mt-4 font-serif text-2xl">{track.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-paper/75">{track.text}</p>
                <Link
                  href={track.href}
                  className="mt-6 text-sm font-semibold text-cyan underline decoration-cyan/40 underline-offset-4"
                >
                  {track.link}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid w-full gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[minmax(18rem,28rem)_1fr] lg:px-16">
        <div className="relative h-80 lg:h-auto">
          <Image
            src="/images/stone-lattice.jpg"
            alt="Dark stone screen with cyan light behind it"
            fill
            sizes="(min-width: 1024px) 18rem, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-5xl tracking-tight text-navy sm:text-6xl">How an engagement proceeds</h2>
          <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {processSteps.map((step) => (
              <li key={step.step} className="grid gap-2 py-5 sm:grid-cols-[4.5rem_12rem_1fr] sm:items-baseline sm:gap-6">
                <span className="font-serif text-2xl text-gold">{step.step}</span>
                <h3 className="text-lg text-navy">{step.title}</h3>
                <p className="text-sm leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-5xl tracking-tight text-navy sm:text-6xl">Notes</h2>
            <Link href="/insights" className="text-sm font-semibold text-navy underline decoration-cyan underline-offset-4">
              All notes
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {insights.map((article) => (
              <li key={article.slug}>
                <Link href={`/insights/${article.slug}`} className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr]">
                  <time dateTime={article.published} className="text-sm text-muted">
                    {article.published}
                  </time>
                  <span>
                    <span className="block font-serif text-2xl text-navy">{article.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{article.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative text-paper">
        <Image
          src="/images/hero-hall.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative flex w-full flex-col gap-8 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl">Discuss a project</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-paper/80">
              Tell us what you are trying to build. If an official inbox is not connected yet, the form says so
              instead of pretending the message was emailed.
            </p>
          </div>
          <Link href="/contact" className="bg-cyan px-6 py-3.5 text-center text-sm font-semibold text-navy">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
