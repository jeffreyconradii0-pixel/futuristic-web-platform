import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function CapabilityCard({
  title,
  summary,
  href,
  image,
  imageAlt,
}: {
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="surface-panel group flex h-full flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-deep-blue">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <ButtonLink href={href} variant="secondary" className="border-ink/15 bg-paper text-ink hover:border-cyan-accent/40">
            Explore pillar
          </ButtonLink>
          <Link href={href} className="text-ink/60 transition hover:text-cyan-accent" aria-label={`Read more about ${title}`}>
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}