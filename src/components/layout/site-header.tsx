"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { Wordmark } from "@/components/layout/wordmark";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const overlay = pathname === "/" && !scrolled && !open;
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const items = panel
      ? [...panel.querySelectorAll<HTMLElement>("a, button")]
      : [];
    items[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
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
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-paper ${
        overlay
          ? "border-b border-transparent bg-gradient-to-b from-navy/80 to-transparent"
          : "border-b border-white/10 bg-navy/95 backdrop-blur-md"
      }`}
    >
      <div className="flex h-20 w-full items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`text-sm tracking-wide ${
                isActive(pathname, item.href) ? "text-cyan" : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-cyan px-4 py-2 text-sm font-semibold text-navy hover:bg-white sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Primary"
          className="fixed inset-0 top-20 z-40 bg-navy px-6 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="border-b border-white/10 py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-6 bg-cyan px-4 py-3 text-center font-semibold text-navy">
              Discuss a Project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
