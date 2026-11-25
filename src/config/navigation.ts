export const primaryNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
] as const;

export const companyNav = [
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/investor-relations", label: "Investor Relations" },
] as const;

export const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
      { href: "/investor-relations", label: "Investor Relations" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/products", label: "Products" },
      { href: "/projects", label: "Projects" },
      { href: "/technology", label: "Technology" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Use" },
      { href: "/legal/disclaimer", label: "Risk Disclosure" },
    ],
  },
] as const;

export const indexableRoutes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/blockchain",
  "/solutions/ai-software",
  "/solutions/fintech",
  "/products",
  "/projects",
  "/technology",
  "/insights",
  "/careers",
  "/partners",
  "/investor-relations",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
  "/legal/disclaimer",
] as const;