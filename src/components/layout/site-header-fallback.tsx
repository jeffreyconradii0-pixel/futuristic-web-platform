import Link from "next/link";
import { primaryNav } from "@/config/navigation";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy text-paper">
      <div className="flex h-20 w-full items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm tracking-wide text-paper/80">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="bg-cyan px-4 py-2 text-sm font-semibold text-navy">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
