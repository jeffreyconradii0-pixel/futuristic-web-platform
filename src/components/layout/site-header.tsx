"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { companyNav, primaryNav } from "@/config/navigation";
import { Wordmark } from "@/components/layout/wordmark";
import { ButtonLink } from "@/components/ui/button";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const companyMenuId = useId();
  const compact = scrolled || pathname !== "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const panel = panelRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const items = panel ? [...panel.querySelectorAll<HTMLElement>("a, button")] : [];
    items[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || items.length === 0) {
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!companyRef.current?.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        compact
          ? "border-line bg-midnight/95 py-0 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-midnight/90 to-transparent py-1"
      } text-paper`}
    >
      <div
        className={`flex w-full items-center justify-between gap-6 px-6 transition-all sm:px-10 lg:px-16 ${
          compact ? "h-16" : "h-20"
        }`}
      >
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`text-sm font-medium tracking-wide transition ${
                isActive(pathname, item.href) ? "text-ice-blue" : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div ref={companyRef} className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/80 transition hover:text-paper"
              aria-expanded={companyOpen}
              aria-controls={companyMenuId}
              onClick={() => setCompanyOpen((open) => !open)}
            >
              Company
              <ChevronDown className={`h-4 w-4 transition ${companyOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {companyOpen ? (
              <div
                id={companyMenuId}
                role="menu"
                className="absolute right-0 mt-3 w-56 rounded-lg border border-line bg-deep-blue p-2 shadow-[var(--shadow-elevated)]"
              >
                {companyNav.map((item) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-sm text-paper/85 hover:bg-midnight hover:text-paper"
                    onClick={() => setCompanyOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" variant="primary" className="hidden sm:inline-flex">
            Contact
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-paper lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-midnight px-6 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {[...primaryNav, ...companyNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="border-b border-line py-4 text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-6 w-full" onClick={() => setMobileOpen(false)}>
              Discuss a Project
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}