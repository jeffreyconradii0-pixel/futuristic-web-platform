export const pillars = [
  {
    slug: "blockchain",
    title: "Blockchain & Digital Assets",
    summary:
      "Building blockchain applications and digital-asset infrastructure with an emphasis on clarity, security, and maintainable on-chain systems.",
    capabilities: [
      "Smart contract design and implementation",
      "Tokenization technology and wallet integrations",
      "Multi-chain application architecture",
      "Indexer and API integration layers",
    ],
    href: "/solutions/blockchain",
    image: "/images/pillar-blockchain.svg",
    imageAlt:
      "Abstract multi-chain network visualization with connected nodes on a midnight navy background",
  },
  {
    slug: "ai-software",
    title: "AI & Software Development",
    summary:
      "Creating intelligent applications and modern software platforms that connect AI capabilities to real user workflows.",
    capabilities: [
      "AI-assisted product features and automations",
      "Full-stack web applications and SaaS foundations",
      "Workflow tooling and internal operations software",
      "Model integration with guardrails and observability",
    ],
    href: "/solutions/ai-software",
    image: "/images/pillar-ai.svg",
    imageAlt:
      "Abstract neural network visualization with refined blue-white light paths",
  },
  {
    slug: "fintech",
    title: "Financial Technology & Trading Systems",
    summary:
      "Developing software tools for market analysis and trading workflows—with research rigor, not performance promises.",
    capabilities: [
      "Technical-analysis indicators and research tooling",
      "Market analytics dashboards and data pipelines",
      "Quantitative backtesting workflows",
      "Alerting and strategy validation utilities",
    ],
    href: "/solutions/fintech",
    image: "/images/pillar-fintech.svg",
    imageAlt:
      "Institutional market analytics environment with subtle chart motifs on a dark terminal aesthetic",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Frame the problem, stakeholders, constraints, and what success should look like before any build commitment.",
  },
  {
    step: "02",
    title: "Design",
    text: "Translate requirements into system boundaries, interfaces, and an implementation plan teams can execute.",
  },
  {
    step: "03",
    title: "Build",
    text: "Ship focused milestones with code review, automated checks, and documentation that matches the architecture.",
  },
  {
    step: "04",
    title: "Validate",
    text: "Test against acceptance criteria, security expectations, and real integration conditions—not slide-deck assumptions.",
  },
  {
    step: "05",
    title: "Improve",
    text: "Measure, refine, and extend based on production feedback while keeping disclosure and compliance boundaries intact.",
  },
] as const;