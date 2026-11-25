import Image from "next/image";
import { CapabilityCard } from "@/components/marketing/capability-card";
import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { pillars } from "@/content/pillars";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Blockchain and digital assets, AI and software development, and financial technology services from Futuristic World.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Three business pillars, one delivery ethos"
        lede="We describe ourselves as a technology developer. Engagements focus on architecture, implementation, and validation—not custody, brokerage, or investment advice."
      />
      <section className="relative overflow-hidden bg-cool-gray py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image src="/images/pillar-blockchain.svg" alt="" fill className="object-cover opacity-40" sizes="50vw" />
        </div>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
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
      <CTASection />
    </>
  );
}