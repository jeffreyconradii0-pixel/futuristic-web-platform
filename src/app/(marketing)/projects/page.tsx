import Link from "next/link";
import { PageIntro } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const publicProjects: readonly {
  name: string;
  summary: string;
  href?: string;
}[] = [];

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Public Futuristic World initiatives. Projects are listed only after they are confirmed. Current status: in development.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Projects in development."
        lede="This page lists only public initiatives that can be described from confirmed information. No project meets that standard yet."
      />
      <div className="w-full px-6 py-20 sm:px-10 lg:px-16">
        {publicProjects.length === 0 ? (
          <div className="border border-ink/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold">STATUS</p>
            <h2 className="mt-3 font-serif text-3xl text-navy">Nothing is published here yet</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              A card will appear when a project name, a factual summary, and a public reference are ready to stand on
              their own. Until then, the honest status is in development.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-navy underline decoration-cyan underline-offset-4"
            >
              Discuss an initiative
            </Link>
          </div>
        ) : (
          <ul className="grid gap-4">
            {publicProjects.map((project) => (
              <li key={project.name} className="border border-ink/10 bg-white p-6">
                <h2 className="font-serif text-2xl text-navy">{project.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
