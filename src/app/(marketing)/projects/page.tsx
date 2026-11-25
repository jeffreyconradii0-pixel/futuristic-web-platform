import { ProjectCard } from "@/components/marketing/project-card";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects & Achievements",
  description:
    "Evidence-based case studies and labeled prototypes from Futuristic World. Unverified draft entries remain unpublished.",
  path: "/projects",
});

export default function ProjectsPage() {
  const items = publishedProjects();

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Work we can show with context"
        lede="Every public case study includes relationship, scope, status, and outcomes we can demonstrate. Draft templates with unverified third-party names stay out of this list."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6">
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </>
  );
}