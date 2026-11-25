import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "ai-workflow-prototype",
    title: "AI Workflow Assistant Prototype",
    category: "AI",
    summary:
      "An internal prototype that routes operational questions to grounded documentation and suggests next steps for engineering teams.",
    relationship: "Independent prototype",
    role: "Product and engineering",
    period: "2025–2026",
    challenge:
      "Teams needed faster answers from scattered runbooks without exposing sensitive credentials to unmanaged chat tools.",
    contribution:
      "Designed retrieval boundaries, built a Next.js operator console, and integrated model calls with explicit source citations.",
    deliverables: [
      "Operator web application",
      "Document ingestion pipeline",
      "Evaluation harness for response quality",
    ],
    outcome:
      "Demonstrated reduced time-to-answer in internal dry runs. Not deployed as a customer-facing product.",
    status: "Prototype",
    image: "/images/project-ai.svg",
    imageAlt: "Conceptual AI workflow dashboard with citation panel",
    verified: true,
    approvedForPublication: true,
  },
  {
    slug: "indicator-research-suite",
    title: "Trading Indicator Research Suite",
    category: "FinTech",
    summary:
      "A research environment for designing, versioning, and backtesting technical indicators with reproducible configuration files.",
    relationship: "Independent prototype",
    role: "Quantitative tooling",
    period: "2024–2026",
    challenge:
      "Ad-hoc spreadsheet workflows made it difficult to compare indicator variants or reproduce prior experiments.",
    contribution:
      "Built a modular indicator library, backtest runner, and exportable reports that separate research from live execution.",
    deliverables: [
      "Indicator specification format",
      "Backtesting engine",
      "Research report templates",
    ],
    outcome:
      "Enables structured experimentation. Does not represent verified live trading performance.",
    status: "Research",
    image: "/images/project-fintech.svg",
    imageAlt: "Dark analytics workspace with chart motifs",
    verified: true,
    approvedForPublication: true,
  },
  {
    slug: "multichain-architecture-lab",
    title: "Multi-chain Architecture Lab",
    category: "Infrastructure",
    summary:
      "A design-and-test sandbox for evaluating cross-chain messaging patterns and wallet flows across multiple networks.",
    relationship: "Independent prototype",
    role: "Systems architecture",
    period: "2025",
    challenge:
      "Product teams needed a safe place to compare interoperability approaches before committing to production topology.",
    contribution:
      "Documented reference architectures, implemented integration spikes, and captured failure modes for each pattern.",
    deliverables: [
      "Architecture decision records",
      "Integration spike repositories",
      "Testnet deployment scripts",
    ],
    outcome:
      "Informed internal build-vs-buy decisions. Not represented as a production deployment.",
    status: "Research",
    image: "/images/project-multichain.svg",
    imageAlt: "Layered blockchain interoperability diagram",
    verified: true,
    approvedForPublication: true,
  },
  {
    slug: "near-ecosystem-draft",
    title: "NEAR Ecosystem Contribution (Draft)",
    category: "Blockchain",
    summary:
      "Draft template for a verified ecosystem contribution. Replace bracketed fields with confirmed project details before publication.",
    relationship: "Contributor (unverified)",
    role: "Blockchain development",
    period: "Pending verification",
    challenge: "Pending client-approved disclosure.",
    contribution:
      "Contributed to [specific component] within a project built on the NEAR ecosystem—pending exact scope confirmation.",
    deliverables: ["Pending verification"],
    outcome: "Not published until evidence and permissions are confirmed.",
    status: "In Development",
    image: "/images/project-placeholder.svg",
    imageAlt: "",
    verified: false,
    approvedForPublication: false,
  },
  {
    slug: "nft-platform-draft",
    title: "NFT Platform Support (Draft)",
    category: "NFT",
    summary:
      "Draft template for marketplace or minting support work. Name the actual project only with written permission.",
    relationship: "Contractor (unverified)",
    role: "Platform development",
    period: "Pending verification",
    challenge: "Pending client-approved disclosure.",
    contribution:
      "Supported development of [NFT platform/project], including verified smart-contract, minting, or front-end work—pending confirmation.",
    deliverables: ["Pending verification"],
    outcome: "Not published until evidence and permissions are confirmed.",
    status: "In Development",
    image: "/images/project-placeholder.svg",
    imageAlt: "",
    verified: false,
    approvedForPublication: false,
  },
];

export function publishedProjects() {
  return projects.filter((p) => p.approvedForPublication);
}

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug && p.approvedForPublication);
}