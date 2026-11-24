import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Suspense } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteHeaderFallback } from "@/components/layout/site-header-fallback";
import { site } from "@/config/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-family",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif-family",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.positioning}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.companyDescription,
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Suspense fallback={<SiteHeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="content" className="flex-1 pt-20">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
