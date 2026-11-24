import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/config/navigation";
import { site } from "@/config/site";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-23");
  const pages = indexableRoutes.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
  }));
  const articles = insights.map((article) => ({
    url: new URL(`/insights/${article.slug}`, site.url).toString(),
    lastModified: new Date(article.published),
  }));
  return [...pages, ...articles];
}
