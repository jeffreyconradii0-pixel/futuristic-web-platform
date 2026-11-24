import type { Metadata } from "next";
import { site } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
