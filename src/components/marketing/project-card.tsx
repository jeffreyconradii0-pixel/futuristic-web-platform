import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Project } from "@/types/content";
import { ButtonLink } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-panel overflow-hidden rounded-lg">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr]">
        <div className="relative min-h-56 bg-deep-blue lg:min-h-full">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
          <p className="mt-4 text-xs text-muted">
            {project.relationship} · {project.period}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`/projects/${project.slug}`} variant="primary">
              View case study
            </ButtonLink>
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-deep-blue underline-offset-4 hover:underline"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}