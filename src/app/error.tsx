"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="font-serif text-4xl text-navy">This page did not load.</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        The request failed before the page could be shown. You can try it again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 bg-navy px-5 py-3 text-sm font-semibold text-paper"
      >
        Try again
      </button>
    </div>
  );
}
