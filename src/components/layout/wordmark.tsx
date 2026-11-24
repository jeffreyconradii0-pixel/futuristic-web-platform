import Link from "next/link";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-paper" : "text-navy";
  const mark = tone === "light" ? "text-cyan" : "text-navy";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${text}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={`h-8 w-8 ${mark}`}
      >
        <rect x="1.5" y="1.5" width="29" height="29" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 23V9h10.5M9 16h8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="21" width="4" height="4" fill="#C8A96B" />
      </svg>
      <span className="leading-none">
        <span className="block text-[0.68rem] font-semibold tracking-[0.22em]">
          FUTURISTIC
        </span>
        <span className="mt-1 block text-[0.68rem] tracking-[0.28em]">WORLD</span>
      </span>
    </Link>
  );
}
