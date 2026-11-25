import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "destructive";

type SharedProps = {
  variant?: Variant;
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ice-blue px-6 py-2.5 text-sm font-semibold text-midnight shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:bg-cyan-accent hover:shadow-[0_8px_24px_-12px_rgba(76,201,232,0.9)] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-ice-blue/40 disabled:text-midnight/50",
  secondary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line-strong bg-midnight/40 px-6 py-2.5 text-sm font-semibold text-paper backdrop-blur-sm transition hover:border-ice-blue/60 hover:bg-deep-blue/80 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",
  tertiary:
    "inline-flex min-h-11 items-center justify-center gap-1.5 text-sm font-semibold text-ice-blue underline-offset-4 transition hover:text-cyan-accent hover:underline disabled:cursor-not-allowed disabled:opacity-50",
  destructive:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",
};

function mergeClasses(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

export function ButtonLink({
  href,
  variant = "primary",
  loading = false,
  children,
  className,
  ...props
}: SharedProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={mergeClasses(variantClasses[variant], className)}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className,
  type = "button",
  ...props
}: SharedProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={mergeClasses(variantClasses[variant], className)}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}