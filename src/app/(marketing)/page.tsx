import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroNetwork } from "@/components/marketing/hero-network";
import { CapabilityCard } from "@/components/marketing/capability-card";
import { ProductCard } from "@/components/marketing/product-card";
import { ProjectCard } from "@/components/marketing/project-card";
import { CTASection } from "@/components/marketing/cta-section";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { heroHighlights, credibilitySignals } from "@/content/pages";
import { pillars, processSteps } from "@/content/pillars";
import { products } from "@/content/products";
import { publishedProjects } from "@/content/projects";
import { technologyGroups } from "@/content/technology";
import { insights } from "@/content/insights";
import { createMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = createMetadata({
  title: site.tagline,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const featuredProjects = publishedProjects().slice(0, 2);

  return (
    <>
      <section className="relative -mt-20 min-h-svh overflow-hidden text-paper">
        <HeroNetwork />
        <Container className="relative flex min-h-svh flex-col justify-center pb-16 pt-28 lg:pt-32">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-accent">FUTURISTIC WORLD</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-hero">{site.tagline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/85 sm:text-xl">
            {site.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/solutions">Explore Our Capabilities</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Discuss a Project
            </ButtonLink>
          </div>
          <ul className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <li key={item.label} className="border-line sm:border-r sm:pr-6 last:sm:border-r-0">
                <p className="text-sm font-semibold text-ice-blue">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-paper/75">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cool-gray py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Three pillars. One engineering standard."
            text="We organize our work around blockchain infrastructure, applied AI, and financial technology—each with clear boundaries and measurable outcomes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <CapabilityCard
                key={pillar.slug}
                title={pillar.title}
                summary={pillar.summary}
                href={pillar.href}
                image={pillar.image}
                imageAlt={pillar.imageAlt}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="surface-dark py-20 text-paper sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Featured work"
            title="Prototypes and research with honest labels"
            text="We publish case studies only when relationship, scope, and status are clear. Featured items below are verified internal work—not third-party achievement claims."
          />
          <div className="mt-12 grid gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <ButtonLink href="/projects" variant="secondary" className="mt-10">
            View all projects
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-cool-gray py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Tools we are building in the open"
            text="Each product card includes status, audience, and capabilities. Demos and repositories are linked when available."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How we work"
            text="A straightforward delivery rhythm that keeps discovery, validation, and improvement visible to stakeholders."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.step} className="rounded-lg border border-line bg-cool-gray p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-deep-blue">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="surface-dark py-20 text-paper sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Technology"
            title="Stacks we ship with discipline"
            text="We list tools the team uses in production engagements—not every logo we have ever touched."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-line bg-deep-blue/40 p-6">
                <h3 className="text-base font-semibold text-ice-blue">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-midnight/50 px-2.5 py-1 text-xs text-paper/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <ButtonLink href="/technology" variant="tertiary" className="mt-8">
            Technology practices
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-cool-gray py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeading
            eyebrow="Credibility"
            title="Evidence, publishing, and restraint"
            text="We would rather show working systems than imply partnerships we cannot substantiate."
          />
          <ul className="space-y-5">
            {credibilitySignals.map((item) => (
              <li key={item.title} className="surface-panel rounded-lg p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
              </li>
            ))}
            <li className="surface-panel rounded-lg p-6">
              <h3 className="text-lg font-semibold text-ink">Latest insights</h3>
              <ul className="mt-4 space-y-3">
                {insights.slice(0, 3).map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-deep-blue hover:text-ink"
                    >
                      {article.title}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}