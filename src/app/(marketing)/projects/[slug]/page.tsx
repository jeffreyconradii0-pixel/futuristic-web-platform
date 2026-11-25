import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/marketing/case-study-layout";
import { projectBySlug, publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return publishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) {
    return {};
  }
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <CaseStudyLayout project={project} />;
}