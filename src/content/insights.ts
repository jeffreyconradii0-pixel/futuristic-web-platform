export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  published: string;
  kicker: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "what-tokenization-infrastructure-involves",
    title: "What tokenization infrastructure actually involves",
    description:
      "A plain account of the technical pieces behind a tokenization project, and the decisions that sit outside a website.",
    published: "2026-11-23",
    kicker: "Site note",
    sections: [
      {
        paragraphs: [
          "Tokenization is often described as if it were a single product. In practice it is a set of technical choices: what is being represented, which system records that representation, who is allowed to act, and how those actions are tested before anything is shown to a user.",
          "This note is educational. It is not a description of a live Futuristic World product, and it is not an offer of any asset.",
        ],
      },
      {
        heading: "The pieces that usually show up",
        paragraphs: [
          "A project typically needs a data model, rules for issuance or transfer, a place those rules run, and an interface for the people operating it. Smart contracts may be part of that, or the record may live in more conventional software. The right split depends on the requirement, not on a slogan.",
          "Testing belongs in the same conversation as design. A contract or service that cannot be exercised in a controlled environment is not ready to be described as built.",
        ],
      },
      {
        heading: "What a technology firm does not settle",
        paragraphs: [
          "Whether a structure is a security, how it may be offered, who may hold it, and which license applies are legal and regulatory questions. They change with the activity and the jurisdiction. A technology engagement can make the system legible. It does not replace counsel, and this site does not provide legal, tax, or investment advice.",
        ],
      },
    ],
  },
  {
    slug: "scoping-a-smart-contract-engagement",
    title: "How to scope a smart-contract engagement",
    description:
      "The questions worth answering before anyone writes contract code, including what testing can and cannot prove.",
    published: "2026-11-23",
    kicker: "Site note",
    sections: [
      {
        paragraphs: [
          "Smart-contract work goes badly when the first artifact is code. The useful starting point is a short written scope: the actions the system must support, the actions it must refuse, the accounts involved, and the networks under consideration.",
        ],
      },
      {
        heading: "A scope that can be tested",
        paragraphs: [
          "Each action should have an expected result and at least one failure case. That list becomes the test plan. If a behavior cannot be stated, it should not be implied in a sales page or a demo script.",
          "Multi-chain support is a design constraint, not a badge. Supporting more than one network adds deployment, key-management, and monitoring work. It should be chosen because the project needs it.",
        ],
      },
      {
        heading: "What testing does not mean",
        paragraphs: [
          "Internal tests show that the agreed behavior ran in the agreed environment. They are not a third-party audit, a certification, or a promise about future value. If an independent review is required, that is a separate engagement with its own evidence.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-digital-asset-project-page",
    title: "How to read a digital-asset project page",
    description:
      "A short checklist for separating a clear technical description from claims that have no published evidence.",
    published: "2026-11-23",
    kicker: "Site note",
    sections: [
      {
        paragraphs: [
          "Project pages in this industry often mix a product description with language about approvals, customers, and returns. Those are different kinds of statements. One can be checked against the software. The others need documents that the page should be able to point to.",
        ],
      },
      {
        heading: "Questions that keep the page honest",
        paragraphs: [
          "What, specifically, can a visitor do today? If the answer is “read about the work,” the page should say that. If the answer is “connect a wallet and receive a token,” the product should actually do that, and the risks of doing it should be stated by the party offering it.",
          "Names of banks, regulators, auditors, and partners are facts. If they are not published with a source, they do not belong in the design. The same is true of volume, user counts, and performance.",
        ],
      },
      {
        heading: "How this website applies that rule",
        paragraphs: [
          "Futuristic World lists a public project only when the project itself can be described from confirmed information. Until then, the projects page says the work is in development. The Token Factory page describes a direction, not a system you can sign in to.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
