import type { ProductStatus, ProjectStatus } from "@/types/content";

const tones: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  Beta: "bg-cyan-accent/15 text-cyan-accent border-cyan-accent/35",
  Prototype: "bg-ice-blue/15 text-ice-blue border-ice-blue/35",
  Research: "bg-silver/15 text-silver border-silver/30",
  Completed: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  "In Development": "bg-amber-400/15 text-amber-200 border-amber-300/35",
  Archived: "bg-muted/20 text-muted border-muted/30",
};

export function StatusBadge({ status }: { status: ProductStatus | ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide ${tones[status] ?? tones.Research}`}
    >
      {status}
    </span>
  );
}