import Link from "next/link";
import { companyNav, primaryNav } from "@/config/navigation";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-midnight text-paper">
      <div className="flex h-20 w-full items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {[...primaryNav, ...companyNav].map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-paper/80">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-md bg-ice-blue px-4 py-2 text-sm font-semibold text-midnight"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}