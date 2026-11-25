export const site = {
  name: "Futuristic World",
  tagline: "Building the Future of Digital Finance & Technology.",
  description:
    "Futuristic World builds software and digital infrastructure across blockchain, artificial intelligence, and financial technology—turning complex ideas into practical products.",
  url: "https://futuristicworld.us",
  locale: "en_US",
  companyDescription:
    "Futuristic World is a technology company focused on building practical digital solutions across blockchain infrastructure, artificial intelligence, and financial technology. We explore emerging technologies, develop software products, and design systems that help businesses and users participate in a more connected digital economy.",
  mission:
    "To turn emerging technologies into useful, secure, and scalable digital products.",
  vision:
    "To contribute to the next generation of digital infrastructure through thoughtful engineering, responsible innovation, and globally accessible technology.",
  contactEmail: "hello@futuristicworld.us",
  githubUrl: "https://github.com/futuristicworld",
  disclaimer:
    "Information on this website is for general informational purposes only. It does not constitute investment, legal, tax, or financial advice, or an offer to sell or solicitation to buy any digital asset or security. Past research or prototype work does not imply future performance.",
  riskDisclosure:
    "Market-analysis and trading-tool content is educational. Live trading involves risk. Verify claims independently before making financial decisions.",
} as const;

export const companyPrinciples = [
  {
    title: "Evidence over impression",
    text: "We publish work we can demonstrate—code, demos, or documented research—not unsupported prestige.",
  },
  {
    title: "Secure by design",
    text: "Architecture choices, access control, and testing discipline are part of every engagement from the first sketch.",
  },
  {
    title: "Responsible innovation",
    text: "We describe capabilities accurately, respect disclosure permissions, and avoid language that implies unlicensed financial services.",
  },
  {
    title: "Accessible engineering",
    text: "Interfaces, documentation, and handoffs are built so teams can operate and extend systems without guesswork.",
  },
] as const;

export const companyFacts = [
  { label: "Focus", value: "Blockchain, AI, and financial technology" },
  { label: "Engagement model", value: "Product development and technical advisory" },
  { label: "Headquarters", value: "United States (remote-first engineering)" },
  { label: "Public contact", value: site.contactEmail },
] as const;