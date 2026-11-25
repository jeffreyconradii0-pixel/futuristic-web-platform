import Link from "next/link";
import { footerGroups, primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark border-t border-line text-paper">
      <div className="grid w-full gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:px-16">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-md text-sm leading-7 text-paper/75">{site.companyDescription}</p>
          <p className="mt-6 text-sm text-paper/70">
            <a href={`mailto:${site.contactEmail}`} className="hover:text-ice-blue">
              {site.contactEmail}
            </a>
          </p>
          <p className="mt-2 text-sm text-paper/70">
            <a
              href={site.githubUrl}
              className="hover:text-ice-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub organization
            </a>
          </p>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan-accent">
              {group.title.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/80 transition hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="flex w-full flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-16">
          <p className="max-w-3xl text-xs leading-6 text-paper/60">{site.disclaimer}</p>
          <p className="text-xs text-paper/50">
            © {year} {site.name}. Explore:{" "}
            {primaryNav.map((item, index) => (
              <span key={item.href}>
                <Link href={item.href} className="hover:text-paper/80">
                  {item.label}
                </Link>
                {index < primaryNav.length - 1 ? " · " : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}