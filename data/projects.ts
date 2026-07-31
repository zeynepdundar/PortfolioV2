export type Layout = "scattered" | "overlap" | "fan" | "single" | "circle";

export type ProjectCategory = "Product & Systems" | "Experiments";

export const projectCategories: ProjectCategory[] = [
  "Product & Systems",
  "Experiments",
];

export type ProjectMediaItem = {
  type: "video" | "image";
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  /** Short role / contribution line, e.g. "Full-Stack Engineer". */
  role?: string;
  /** How the featured card presents media. "brand" shows a logo/wordmark
   *  panel instead of a product screenshot — for confidential / NDA work. */
  display?: "window" | "brand";
  brand?: {
    logo?: string;
    mark?: string;
    wordmark?: string;
    accent?: string;
  };
  layout: Layout;
  media: ProjectMediaItem[];
  summary: string[];
  metrics?: ProjectMetric[];
  tech?: string[];
  screens?: { src: string; caption: string }[];
  demoVideo?: string;
  statusNote?: string;
  links: ProjectLink[];
  details?: {
    headline?: string;
    overview?: string[];
    highlights?: string[];
    scope?: string[];
  };
};

export const projects: Project[] = [
  {
    eyebrow: "2026 — Present",
    title: "OraxAI",
    subtitle: "AI-powered logistics platform: live in pharmaceutical operations",
    category: "Product & Systems",
    role: "Software Engineer",
    display: "brand",
    brand: { logo: "/images/orax-ai.png", mark: "oraxai", wordmark: "OraxAI" },
    layout: "single",
    media: [
      { type: "image", src: "/images/orax-ai.png", alt: "OraxAI platform" },
    ],
    summary: [
      "Developed a full-stack Quality Management System (QMS) application and built the customer portal for an AI-powered enterprise platform.",
    ],
    metrics: [
      { value: "Full-stack", label: "QMS Application" },
      { value: "Portal", label: "Customer Experience" },
      { value: "Enterprise", label: "Operations Platform" },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    statusNote:
      "Engineered full-stack features for QMS workflows and customer portal capabilities used in real warehouse operations.",
    links: [{ label: "Company Website", href: "https://oraxai.com" }],
  },
  {
    eyebrow: "2023 — 2026",
    title: "LINGA BackOffice",
    category: "Product & Systems",
    role: "Frontend Engineer",
    layout: "single",
    media: [
      { type: "image", src: "/images/linga.png", alt: "Linga platform" },
    ],
    summary: [
      "Migrated legacy Angular modules to a modern, state-driven frontend architecture, improving platform maintainability and performance across core restaurant operations."],
    metrics: [
      { value: "Legacy → Modern", label: "Migration" },
      { value: "RxJS / NgRx", label: "State management" },
      { value: "Enterprise", label: "Restaurant platform" },
    ],
    tech: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    statusNote:
      "Improved performance and maintainability across core back-office modules, supporting high-frequency POS and administrative workflows.",
    links: [{ label: "Company Website", href: "https://www.lingapos.com/" }],
  },
  {
    eyebrow: "Independent Product",
    slug: "bookswap",
    title: "BookSwap",
    category: "Product & Systems",
    role: "Co-Founder & Lead Engineer",
    layout: "overlap",
    media: [
      { type: "image", src: "/images/book-swap.png", alt: "Book swap home" },
      { type: "video", src: "/videos/book-swap.mp4", alt: "Book swap demo" },
      { type: "image", src: "/images/book-swap.png", alt: "Book swap detail" },
    ],
    summary: [
      "Mobile-first P2P marketplace for discovering and exchanging books. Architected and built 0-to-1 from product strategy to App Store release.",
    ],
    metrics: [
      { value: "28M+", label: "Book catalog" },
      { value: "iOS & Android", label: "Mobile release" },
      { value: "Real-time", label: "In-app chat" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase", "PostgreSQL", "Next.js"],
    demoVideo: "/videos/book-swap.mp4",
    screens: [
      { src: "/images/bookswap/onboarding.png", caption: "Onboarding — build your infinite library" },
      { src: "/images/bookswap/home.png", caption: "Home — recently added & most popular" },
      { src: "/images/bookswap/discover.png", caption: "Discover — search 28M+ titles" },
      { src: "/images/bookswap/scanner.png", caption: "Barcode scan — add a book by ISBN" },
      { src: "/images/bookswap/add-book.png", caption: "Add to your library or wishlist" },
      { src: "/images/bookswap/swap-proposal.png", caption: "Swap proposal — offer a trade" },
      { src: "/images/bookswap/swaps-received.png", caption: "Incoming swaps — accept or decline" },
      { src: "/images/bookswap/chat.png", caption: "Chat tied to each swap" },
      { src: "/images/bookswap/profile.png", caption: "Profile — library, wishlist & settings" },
    ],
    links: [
      { label: "Case Study", href: "/projects/bookswap" },
      { label: "Marketing Website", href: "https://www.bookswapapp.com/" },
    ],
    details: {
      headline:
        "A mobile-first marketplace app for physical book exchange — featuring ISBN scanning, state-driven swap workflows, and real-time messaging.",
      overview: [
        "BookSwap turns read books into new discoveries. Users scan barcodes to build digital shelves, browse a 28M+ title database, and initiate local trade proposals seamlessly.",
        "I led the product development end-to-end: designing the UX, engineering the React Native cross-platform architecture, integrating dynamic state machines for swap flows, and launching on the App Store.",
      ],
      highlights: [
        "High-performance barcode scanning & instant ISBN lookup (28M+ database)",
        "Stateful swap engine supporting multi-step exchange negotiation",
        "Real-time messaging architecture tied directly to swap contexts",
        "Dedicated Next.js marketing web app optimized for SEO and conversion",
      ],
      scope: [
        "Product vision, UX design, and component hierarchy",
        "React Native & Expo cross-platform mobile architecture",
        "Global state design (Redux Toolkit) & backend integration",
        "App Store deployment, marketing landing page, and analytics tracking",
      ],
    },
  },
  {
    eyebrow: "2021 — 2022",
    title: "Mercedes-Benz B2B Connect",
    category: "Product & Systems",
    role: "Frontend Engineer · Accenture",
    brand: { mark: "mercedes", wordmark: "Mercedes-Benz" },
    layout: "circle",
    media: [
      {
        type: "image",
        src: "/images/b2bconnect.png",
        alt: "Mercedes-Benz B2B Connect platform",
      },
    ],
    summary: [
      "Engineered shared design system components and complex UI modules for a global B2B platform serving Mercedes-Benz partners worldwide.",
    ],
    metrics: [
      { value: "19+", label: "Global markets" },
      { value: "10+", label: "Shared UI components" },
      { value: "Storybook", label: "Design system" },
    ],
    tech: ["React", "Next.js", "Redux", "Storybook", "Umbraco CMS"],
    statusNote:
      "Built resilient, accessible, and highly reusable React UI components integrated into a multi-market global portal.",
    links: [{ label: "B2B Connect", href: "https://b2bconnect.mercedes-benz.com/de" }],
  },
  {
    eyebrow: "Experiment",
    title: "At The Races",
    category: "Experiments",
    role: "Solo Build",
    layout: "scattered",
    media: [
      { type: "video", src: "/videos/horse-race.mp4", alt: "Horse race gameplay" },
      { type: "image", src: "/images/horse-race-list.png", alt: "Race finish" },
      {
        type: "image",
        src: "/images/horse-race-landing.png",
        alt: "At The Races – Landing screen",
      },
    ],
    summary: [
      "Browser-based horse racing simulation built to explore dynamic probability models, race telemetry, and emergent gameplay loop mechanics.",
    ],
    tech: ["React", "TypeScript", "Vercel"],
    links: [
      {
        label: "Live Preview",
        href: "https://horse-racing-game-steel.vercel.app/",
      },
    ],
  },
  {
    eyebrow: "Experiment",
    title: "Shelfie",
    category: "Experiments",
    role: "Solo Build",
    layout: "fan",
    media: [
      { type: "image", src: "/images/shelfie.png", alt: "Shelfie app" },
      { type: "video", src: "/videos/shelfie.mp4", alt: "Shelfie demo" },
    ],
    summary: [
      "Minimalist reading tracker exploring local data persistence, clean client-side state, and distraction-free UI design.",
    ],
    tech: ["React", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdundar/shelfie" },
    ],
  },
  {
    eyebrow: "Experiment",
    title: "Pokédex",
    category: "Experiments",
    role: "Weekend Build",
    layout: "single",
    media: [{ type: "video", src: "/videos/pokedex.mp4", alt: "Pokédex demo" }],
    summary: [
      "Exploration of advanced REST API caching strategies, virtualized UI lists, and fluid component state management in React.",
    ],
    tech: ["React", "TypeScript", "PokéAPI"],
    links: [
      { label: "View Project", href: "https://github.com/zeynepdundar/pokedex" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}