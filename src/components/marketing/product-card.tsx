import { StatusBadge } from "@/components/ui/status-badge";
import { ButtonLink } from "@/components/ui/button";
import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="surface-panel flex h-full flex-col rounded-lg p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-ink">{product.name}</h3>
        <StatusBadge status={product.status} />
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">{product.problem}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-blue">Target user</p>
      <p className="mt-1 text-sm text-ink">{product.audience}</p>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {product.capabilities.map((cap) => (
          <li key={cap} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-accent" aria-hidden="true" />
            <span>{cap}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={`/products#${product.slug}`} variant="tertiary">
          View details
        </ButtonLink>
        <ButtonLink href={product.href ?? "/contact"} variant="secondary" className="border-ink/15 bg-paper text-ink">
          {product.hrefLabel ?? "Discuss this product"}
        </ButtonLink>
      </div>
    </article>
  );
}