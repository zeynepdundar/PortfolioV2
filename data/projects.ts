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

export type ProjectLinkIcon = "appStore" | "googlePlay" | "github" | "website";

export type ProjectLink = {
  label: string;
  href: string;
  /** Optional icon. On the home card, icon links render as compact icon buttons. */
  icon?: ProjectLinkIcon;
  /** Where the link appears. Omit to show it on both the home card and the detail page. */
  placement?: "card" | "detail";
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
  /** Short line shown under the summary on the home card. Falls back to nothing. */
  tags?: string[];
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
    eyebrow: "ORAXAI · 2026–PRESENT",
    title: "Quality Management System",
    category: "Product & Systems",
    role: "Software Engineer",
    display: "brand",
    brand: { logo: "/images/orax-ai.png", mark: "oraxai", wordmark: "OraxAI" },
    layout: "single",
    media: [
      { type: "image", src: "/images/orax-ai.png", alt: "OraxAI platform" },
    ],
    summary: [
      "Architected and developed a full-stack QMS from the ground up, owning system design, domain modeling, access control, and regulated document workflows.",
    ],
    metrics: [
      { value: "Full-stack", label: "QMS Application" },
      { value: "Portal", label: "Customer Experience" },
      { value: "Enterprise", label: "Operations Platform" },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    tags: ["Angular", "Node.js", "Nx", "PostgreSQL"],
    statusNote:
      "Engineered full-stack features for QMS workflows and customer portal capabilities used in real warehouse operations.",
    links: [{ label: "Company Website", href: "https://oraxai.com" }],
  },
  {
    eyebrow: "LINGA · 2023–2026",
    title: "LINGA BackOffice",
    category: "Product & Systems",
    role: "Frontend Engineer",
    layout: "single",
    media: [
      { type: "image", src: "/images/linga.png", alt: "Linga platform" },
    ],
    summary: [
      "Modernized legacy Angular modules for an enterprise restaurant management platform, focusing on frontend architecture, predictable state management, and maintainability."],
    metrics: [
      { value: "Legacy → Modern", label: "Migration" },
      { value: "RxJS / NgRx", label: "State management" },
      { value: "Enterprise", label: "Restaurant platform" },
    ],
    tech: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    tags: ["Angular", "TypeScript", "Frontend Architecture"],
    statusNote:
      "Improved performance and maintainability across core back-office modules, supporting high-frequency POS and administrative workflows.",
    links: [{ label: "Company Website", href: "https://www.lingapos.com/" }],
  },
  {
    eyebrow: "INDEPENDENT PRODUCT · iOS & ANDROID",
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
      "Built a location-based P2P book exchange app for iOS and Android, spanning product design, system architecture, and core exchange workflows from concept to production.",
    ],
    metrics: [
      { value: "28M+", label: "Book catalog" },
      { value: "iOS & Android", label: "Mobile release" },
      { value: "Real-time", label: "In-app chat" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase", "PostgreSQL", "Next.js"],
    tags: ["React Native", "Mobile Engineering", "Product Development"],
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
      { label: "View Case Study", href: "/projects/bookswap", placement: "card" },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/book-swaps/id6476162048",
        icon: "appStore",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.harmony.bookswap.android",
        icon: "googlePlay",
      },
      {
        label: "Marketing Website",
        href: "https://www.bookswapapp.com/",
        icon: "website",
        placement: "detail",
      },
      // TODO: add the GitHub repo URL
      // { label: "GitHub", href: "https://github.com/<owner>/<repo>", icon: "github", placement: "detail" },
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
    eyebrow: "INDEPENDENT PRODUCT · WEB",
    title: "MyShelfie",
    category: "Product & Systems",
    role: "Founder & Solo Engineer",
    layout: "fan",
    media: [
      { type: "image", src: "/images/myshelfie/landing.webp", alt: "MyShelfie landing page" },
      { type: "image", src: "/images/myshelfie/library.webp", alt: "MyShelfie library" },
      { type: "image", src: "/images/myshelfie/statistics.webp", alt: "MyShelfie reading statistics" },
    ],
    summary: [
      "Designed, built, and launched a bilingual reading tracker for logging books, saving quotes, and exploring reading statistics.",
    ],
    metrics: [
      { value: "Live", label: "Public web app" },
      { value: "EN / TR", label: "Fully localized" },
      { value: "Monorepo", label: "Web · API · Mobile" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Firebase", "next-intl", "Recharts", "Tailwind CSS"],
    tags: ["Next.js", "React", "TypeScript"],
    screens: [
      { src: "/images/myshelfie/landing.webp", caption: "Landing — start a bookshelf, no sign-up needed" },
      { src: "/images/myshelfie/library.webp", caption: "Library — want to read, in progress & finished" },
      { src: "/images/myshelfie/add-book-search.webp", caption: "Add a book — search Google Books or add by hand" },
      { src: "/images/myshelfie/statistics.webp", caption: "Statistics — books and pages read across the year" },
    ],
    statusNote:
      "Google Books search, reading statistics, favorites & quotes, CSV export, guest-to-account sign-in, and self-serve account deletion.",
    links: [
      { label: "Live App", href: "https://myshelfie.space" },
      { label: "GitHub", href: "https://github.com/zeynepdundar/MyShelfie" },
    ],
  },
  {
    eyebrow: "ACCENTURE · 2021–2022",
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
      "Developed reusable design system components and complex UI modules for a global B2B platform supporting Mercedes-Benz partners.",
    ],
    metrics: [
      { value: "19+", label: "Global markets" },
      { value: "10+", label: "Shared UI components" },
      { value: "Storybook", label: "Design system" },
    ],
    tech: ["React", "Next.js", "Redux", "Storybook", "Umbraco CMS"],
    tags: ["Frontend Engineering", "Design Systems", "Enterprise UI"],
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