export const technologyGroups = [
  {
    title: "Blockchain & Smart Contracts",
    items: ["Solidity", "Rust (NEAR)", "Hardhat", "Foundry", "ethers.js", "wallet connectors"],
  },
  {
    title: "AI & Data",
    items: ["OpenAI APIs", "vector retrieval", "Python data tooling", "evaluation harnesses", "prompt guardrails"],
  },
  {
    title: "Web & Application Engineering",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST and GraphQL APIs"],
  },
  {
    title: "Financial Data & Trading Tools",
    items: ["market data pipelines", "indicator frameworks", "backtesting utilities", "time-series storage"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Cloudflare Workers", "CI/CD", "observability", "infrastructure as code", "secrets management"],
  },
] as const;

export const engineeringPractices = [
  {
    title: "Architecture reviews",
    text: "We document boundaries, threat assumptions, and rollback paths before scaling traffic or capital-adjacent workflows.",
  },
  {
    title: "Automated quality gates",
    text: "Linting, type checks, contract tests, and preview deployments catch regressions early in the cycle.",
  },
  {
    title: "Security-minded defaults",
    text: "Least-privilege access, input validation, and dependency review are standard—not optional extras.",
  },
  {
    title: "Operational handoffs",
    text: "Runbooks, dashboards, and on-call playbooks ship alongside features when systems move toward production.",
  },
] as const;