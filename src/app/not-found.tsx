import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-blue">404</p>
      <h1 className="mt-4 font-serif text-4xl text-navy">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        The address does not match a published page. Use the primary navigation, or start again from the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="bg-navy px-5 py-3 text-center text-sm font-semibold text-paper">
          Back home
        </Link>
        <Link href="/contact" className="border border-ink/15 px-5 py-3 text-center text-sm font-semibold text-navy">
          Contact
        </Link>
      </div>
    </div>
  );
}
