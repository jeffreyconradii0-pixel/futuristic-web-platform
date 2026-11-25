import type { ProductStatus } from "@/types/content";

export type Product = {
  slug: string;
  name: string;
  problem: string;
  audience: string;
  status: ProductStatus;
  capabilities: string[];
  href?: string;
  hrefLabel?: string;
  verified: boolean;
};

export const products: Product[] = [
  {
    slug: "signal-lab",
    name: "Signal Lab",
    problem:
      "Research teams need a controlled workspace to prototype indicators, run backtests, and compare hypotheses without mixing live capital with experiments.",
    audience: "Quantitative researchers and engineering-led trading desks",
    status: "Research",
    capabilities: [
      "Indicator scripting environment",
      "Historical dataset replay",
      "Backtest report exports",
      "Scenario notebooks",
    ],
    verified: true,
  },
  {
    slug: "chain-bridge-kit",
    name: "Chain Bridge Kit",
    problem:
      "Multi-chain products stall when integration patterns are reinvented for every network pairing.",
    audience: "Teams building cross-chain applications",
    status: "Prototype",
    capabilities: [
      "Reference wallet connection flows",
      "Message-passing patterns",
      "Network configuration templates",
      "Integration test harness",
    ],
    verified: true,
  },
  {
    slug: "ops-copilot",
    name: "Ops Copilot",
    problem:
      "Operations teams lose time switching between runbooks, tickets, and monitoring when incidents do not map to a single surface.",
    audience: "Platform and DevOps teams",
    status: "Beta",
    capabilities: [
      "Runbook-aware AI assistance",
      "Slack and email triage hooks",
      "Incident timeline drafting",
      "Audit-friendly action logs",
    ],
    href: "/contact",
    hrefLabel: "Request beta access",
    verified: true,
  },
];