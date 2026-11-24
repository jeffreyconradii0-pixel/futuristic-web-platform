export const primaryNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/token-factory", label: "Token Factory" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/tokenization", label: "Tokenization" },
      { href: "/technology", label: "Technology" },
      { href: "/token-factory", label: "Token Factory" },
    ],
  },
  {
    title: "Notes",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/legal/disclaimer", label: "Disclaimer" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
] as const;

export const indexableRoutes = [
  "/",
  "/about",
  "/solutions",
  "/solutions/tokenization",
  "/technology",
  "/token-factory",
  "/projects",
  "/insights",
  "/contact",
  "/legal/disclaimer",
  "/legal/privacy",
] as const;
