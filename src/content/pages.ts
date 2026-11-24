export const capabilities = [
  {
    icon: "layers",
    title: "Tokenization technology",
    text: "Technical work for representing and operating tokenized records, shaped around a specific project rather than a fixed product menu.",
  },
  {
    icon: "contracts",
    title: "Smart contract development",
    text: "Design, implementation, and testing of contract behavior when a project needs on-chain rules. Internal testing is not an audit certificate.",
  },
  {
    icon: "network",
    title: "Multi-chain architecture",
    text: "Architecture that can address more than one network when the requirement calls for it, including the operational cost of doing so.",
  },
  {
    icon: "infrastructure",
    title: "Product infrastructure",
    text: "Foundations that a later product, such as a token factory or customer portal, could be built on. Those products are not live on this site.",
  },
] as const;

export const tracks = [
  {
    index: "01",
    title: "Our digital asset initiatives",
    href: "/projects",
    link: "See project status",
    text: "This track is for work Futuristic World itself is pursuing. Only initiatives that are public and confirmed are listed. Nothing meets that bar yet, so the current status is projects in development.",
  },
  {
    index: "02",
    title: "Technology for businesses",
    href: "/solutions",
    link: "Review the services",
    text: "This track is technology work for businesses and emerging projects: tokenization technology, smart-contract development and testing, and blockchain architecture. It is not legal advice, custody, brokerage, or a securities placement.",
  },
  {
    index: "03",
    title: "Future Token Factory",
    href: "/token-factory",
    link: "Read the concept",
    text: "Token Factory is a product direction for a later release. This website describes the idea and the boundary around it. There is no account, issuance flow, or wallet connection here.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Clarify the objective, the people involved, and the technical scope of the question.",
  },
  {
    step: "02",
    title: "Assess",
    text: "Review the architecture and constraints. This is a technical assessment, not a legal opinion or a regulatory determination.",
  },
  {
    step: "03",
    title: "Design",
    text: "Describe the system boundaries, the tokenization approach, and the integration points worth building.",
  },
  {
    step: "04",
    title: "Build and test",
    text: "Implement the agreed components and test them against the written behavior, including contract tests when they are in scope.",
  },
  {
    step: "05",
    title: "Launch readiness",
    text: "Prepare the technical handoff. Going live still depends on the project's own legal, security, and operational review.",
  },
] as const;

export const heroPlates = [
  {
    label: "Explore",
    text: "Frame the technical question before any build is promised.",
  },
  {
    label: "Build",
    text: "Design and test the components that are actually in scope.",
  },
  {
    label: "Manage",
    text: "Leave room for a later operating product without pretending it exists today.",
  },
] as const;

export const serviceBoundaries = [
  "Legal, tax, or investment advice",
  "Custody of digital assets or fiat",
  "Brokerage, exchange, or order matching",
  "Placement or solicitation of securities",
  "Money transmission",
  "A claim of regulatory approval or a third-party audit",
] as const;

export const tokenizationFaq = [
  {
    question: "Is a conversation on this site an offer to buy or sell a token?",
    answer:
      "No. The site explains technology work and collects business inquiries. It is not an offer to sell, or a solicitation to buy, any digital asset or security.",
  },
  {
    question: "Do you hold assets for clients?",
    answer:
      "No. Custody is outside the work described here. An engagement does not include holding digital assets or cash for a customer.",
  },
  {
    question: "Will you tell us whether a token is a security?",
    answer:
      "No. That is a legal question for qualified counsel in the relevant jurisdiction. We can describe the technical system so that counsel has something concrete to review.",
  },
  {
    question: "Can this website issue a token?",
    answer:
      "No. Version one is a marketing and inquiry site. Wallet connection, deployment, trading, and payment collection are intentionally absent.",
  },
  {
    question: "Are engagements identical?",
    answer:
      "No. Each engagement is scoped to the project's requirements and remains subject to the appropriate legal, security, and operational review.",
  },
] as const;

export const factoryLimits = [
  "No accounts or sign-in",
  "No wallet connection",
  "No token deployment",
  "No trading or payment collection",
  "No custody",
] as const;

export const factoryDirections = [
  {
    title: "Issuance workflow",
    text: "A future operator flow for preparing a token definition. It is not available, and no date is promised.",
  },
  {
    title: "Network selection",
    text: "A place to record which networks a project intends to use. Choosing a network is a design decision, not a claim that every network is supported today.",
  },
  {
    title: "Operational controls",
    text: "Roles, pauses, and review steps that a real product would need. They are listed here so the later build has a boundary, not because you can use them now.",
  },
] as const;
