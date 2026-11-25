import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/config/navigation";
import { site } from "@/config/site";
import { insights } from "@/content/insights";
import { publishedProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25");
  const pages = indexableRoutes.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
  }));
  const articles = insights.map((article) => ({
    url: new URL(`/insights/${article.slug}`, site.url).toString(),
    lastModified: new Date(article.published),
  }));
  const projectPages = publishedProjects().map((project) => ({
    url: new URL(`/projects/${project.slug}`, site.url).toString(),
    lastModified,
  }));
  return [...pages, ...articles, ...projectPages];
}
