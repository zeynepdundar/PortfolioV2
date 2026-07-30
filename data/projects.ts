type Layout = "scattered" | "overlap" | "fan" | "single" | "circle";

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
  category: ProjectCategory;
  /** Short role / contribution line, e.g. "Full-Stack Engineer". */
  role?: string;
  /** How the featured card presents media. "brand" shows a logo/wordmark
   *  panel instead of a product screenshot — for confidential / NDA work. */
  display?: "window" | "brand";
  brand?: {
    /** Optional logo image path (e.g. "/images/logos/oraxai.svg"). Takes
     *  priority over `mark` and `wordmark` when set. */
    logo?: string;
    /** Key for a built-in inline SVG mark (theme-aware). e.g. "mercedes". */
    mark?: string;
    /** Text shown when no logo/mark is provided. Defaults to project title. */
    wordmark?: string;
    /** Optional CSS background override for the brand panel. */
    accent?: string;
  };
  layout: Layout;
  media: ProjectMediaItem[];
  summary: string[];
  /** Headline metrics rendered as stat badges on featured cards. */
  metrics?: ProjectMetric[];
  /** Technology stack rendered as chips. */
  tech?: string[];
  /** Portrait app screenshots for the case study walkthrough. */
  screens?: { src: string; caption: string }[];
  /** Portrait screen-recording shown as a phone demo on the case study. */
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
    eyebrow: "2026",
    title: "OraxAI",
    category: "Product & Systems",
    role: "Full-Stack Engineer",
    display: "brand",
    brand: { logo: "/images/orax-ai.png", mark: "oraxai", wordmark: "OraxAI" },
    layout: "single",
    media: [
      { type: "image", src: "/images/orax-ai.png", alt: "OraxAI platform" },
    ],
    summary: [
      "AI-powered operations platform for pharmaceutical logistics, warehouse, transport, quality management, and traceability.",
    ],
    metrics: [
      { value: "5+", label: "Systems unified" },
      { value: "Real-time", label: "Data pipelines" },
      { value: "Full-stack", label: "Architecture & delivery" },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    statusNote:
      "Actively evolving with new AI capabilities, workflow automation, and ongoing infrastructure improvements.",
    links: [{ label: "Company Website", href: "https://oraxai.com" }],
  },
  {
    eyebrow: "2023 -2026",
    title: "LINGA BackOffice",
    category: "Product & Systems",
    role: "Frontend Engineer",
    layout: "single",
    media: [
      { type: "image", src: "/images/linga.png", alt: "Linga platform" },
    ],
    summary: [
      "Restaurant operations platform where I contributed to migrating legacy Angular applications to a modern frontend architecture.",
    ],
    metrics: [
      { value: "Legacy → Modern", label: "Migration" },
      { value: "Angular", label: "Frontend stack" },
      { value: "Enterprise", label: "Restaurant platform" },
    ],

    tech: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    statusNote:
      "Actively evolving with new AI capabilities, workflow automation, and ongoing infrastructure improvements.",
    links: [{ label: "Company Website", href: "https://www.lingapos.com/" }],
  },
  {
    eyebrow: "Independent Product",
    slug: "bookswap",
    title: "BookSwap",
    category: "Product & Systems",
    role: "Lead Frontend & Mobile Engineer",
    layout: "overlap",
    media: [
      { type: "image", src: "/images/book-swap.png", alt: "Book swap home" },
      { type: "video", src: "/videos/book-swap.mp4", alt: "Book swap demo" },
      { type: "image", src: "/images/book-swap.png", alt: "Book swap detail" },
    ],
    summary: [
      "Mobile-first marketplace for discovering, listing, and exchanging books. Designed and built from concept to App Store release.",
    ],
    metrics: [
      { value: "28M+", label: "Book catalog" },
      { value: "iOS & Android", label: "Mobile release" },
      { value: "Real-time", label: "In-app chat" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase", "PostgreSQL"],
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
      { label: "Marketing Website", href: "https://www.bookswapapp.com/" },
    ],
    details: {
      headline:
        "A mobile-first app for discovering, listing, and exchanging books — with barcode scanning, swaps, and chat.",
      overview: [
        "BookSwap turns the books you've finished into the ones you want next. Scan a barcode to add a book, browse a catalog of 28M+ titles, and propose a trade with a reader nearby.",
        "I designed and built the product end to end — the React Native app, the swap and chat flows, and the App Store release.",
      ],
      highlights: [
        "Barcode scanning + ISBN search across 28M+ titles",
        "Personal library and wishlist management",
        "Swap proposals with accept / decline / take-back states",
        "Real-time chat tied to each exchange",
      ],
      scope: [
        "End-to-end mobile UX, from onboarding to swap completion",
        "Frontend architecture and state management (Redux Toolkit)",
        "Barcode/ISBN lookup and catalog integration",
        "App Store release and marketing site",
      ],
    },
  },
  {
    eyebrow: "2021",
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
      "Global B2B platform helping Mercedes-Benz partners manage vehicle information, parts, and service workflows.",
    ],
    metrics: [
      { value: "19+", label: "Global markets" },
      { value: "10+", label: "Shared UI components" },
      { value: "Storybook", label: "Design system" },
    ],
    tech: ["React", "Next.js", "Redux", "Storybook", "Umbraco CMS"],
    statusNote:
      "Helped establish a scalable component architecture supporting the platform’s international rollout and future market expansion.",
    links: [{ label: "B2B Connect", href: "https://b2bconnect.mercedes-benz.com/de" }],
  },
  {
    eyebrow: "Experiment",
    title: "At The Races",
    category: "Experiments",
    role: "Solo build",
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
      "Browser-based horse racing simulation exploring probability and emergent gameplay.",
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
    role: "Solo build",
    layout: "fan",
    media: [
      { type: "image", src: "/images/shelfie.png", alt: "Shelfie app" },
      { type: "video", src: "/videos/shelfie.mp4", alt: "Shelfie demo" },
    ],
    summary: [
      "A personal reading tracker that grew from a spreadsheet replacement into a thoughtful product experience.",
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
    role: "Weekend build",
    layout: "single",
    media: [{ type: "video", src: "/videos/pokedex.mp4", alt: "Pokédex demo" }],
    summary: [
      "React application exploring API integration, caching, and reusable UI components.",
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
