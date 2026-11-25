import Image from "next/image";
import { StatusBadge } from "@/components/ui/status-badge";
import { ButtonLink } from "@/components/ui/button";
import type { Project } from "@/types/content";

export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article>
      <header className="surface-dark text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-72 bg-deep-blue lg:min-h-[28rem]">
            <Image src={project.image} alt={project.imageAlt} fill className="object-cover" sizes="50vw" priority />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/70">
                {project.category}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-4 text-base leading-7 text-paper/80">{project.summary}</p>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-paper/60">Relationship</dt>
                <dd className="mt-1 font-medium">{project.relationship}</dd>
              </div>
              <div>
                <dt className="text-paper/60">Role</dt>
                <dd className="mt-1 font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-paper/60">Period</dt>
                <dd className="mt-1 font-medium">{project.period}</dd>
              </div>
              <div>
                <dt className="text-paper/60">Verification</dt>
                <dd className="mt-1 font-medium">{project.verified ? "Verified internal record" : "Pending"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="bg-cool-gray px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-10">
          <section>
            <h2 className="text-2xl font-semibold text-ink">Challenge</h2>
            <p className="mt-4 text-base leading-7 text-muted">{project.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Our contribution</h2>
            <p className="mt-4 text-base leading-7 text-muted">{project.contribution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Deliverables</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {project.deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-base leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-ink">Outcome</h2>
            <p className="mt-4 text-base leading-7 text-muted">{project.outcome}</p>
          </section>
          {project.evidenceUrl ? (
            <p>
              <a
                href={project.evidenceUrl}
                className="text-sm font-semibold text-deep-blue underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View public evidence
              </a>
            </p>
          ) : null}
          <ButtonLink href="/contact" className="w-fit">
            Discuss similar work
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}