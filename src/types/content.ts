export type ProductStatus = "Live" | "Beta" | "Prototype" | "Research";

export type ProjectStatus =
  | "Live"
  | "Completed"
  | "In Development"
  | "Prototype"
  | "Research"
  | "Archived";

export type ProjectCategory =
  | "Blockchain"
  | "NFT"
  | "AI"
  | "FinTech"
  | "Infrastructure"
  | "Software";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  relationship: string;
  role: string;
  period: string;
  challenge: string;
  contribution: string;
  deliverables: string[];
  outcome: string;
  evidenceUrl?: string;
  image: string;
  imageAlt: string;
  status: ProjectStatus;
  verified: boolean;
  approvedForPublication: boolean;
};