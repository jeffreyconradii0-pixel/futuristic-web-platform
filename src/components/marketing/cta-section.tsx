import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection() {
  return (
    <section className="surface-dark py-20 text-paper sm:py-24">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-accent">NEXT STEP</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="mt-4 text-base leading-7 text-paper/75">
            Tell us what you are exploring. We will respond with an honest view of scope, risk, and whether we are the
            right engineering partner.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Discuss a Project</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Explore Our Capabilities
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}