import Link from "next/link";
import { footerGroups } from "@/config/navigation";
import { site, unconfirmedFacts } from "@/config/site";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-paper">
      <div className="grid w-full gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-16">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-sm text-sm leading-6 text-paper/75">{site.companyDescription}</p>
          <dl className="mt-6 space-y-2 text-sm text-paper/70">
            {unconfirmedFacts.slice(0, 3).map((fact) => (
              <div key={fact.label} className="grid grid-cols-[8.5rem_1fr] gap-3">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-xs tracking-[0.18em] text-gold">{group.title.toUpperCase()}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/80 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="w-full px-6 py-8 sm:px-10 lg:px-16">
          <p className="max-w-4xl text-xs leading-5 text-paper/60">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
