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
    brand: { mark: "oraxai", wordmark: "OraxAI" },
    layout: "single",
    media: [
      { type: "image", src: "/images/oraxai.png", alt: "OraxAI platform" },
    ],
    summary: [
      "AI-powered enterprise operations platform for warehouse, transport, quality, and traceability.",
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
    slug: "book-trading-platform",
    title: "Book Trading Platform",
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
    links: [
      { label: "Live Demo", href: "https://vimeo.com/1037563566?share=copy" },
    ],
    details: {
      headline:
        "A mobile-first platform for discovering, listing, and exchanging books with real-time chat.",
      overview: [
        "Book Trading Platform is a book exchange app designed around a simple flow: add books to your library, find people nearby who want what you have, and coordinate the swap in a chat that keeps the whole exchange in one place.",
        "The product focus is on reducing friction during the “I have it / I want it” moment — barcode-based lookup for fast cataloging, clean inventory management, and messaging that’s tied directly to the books being discussed.",
      ],
      highlights: [
        "Barcode scanning + ISBN search across a large catalog (28M+ titles)",
        "Personal library and wishlist management",
        "Real-time chat to coordinate swaps",
        "Exchange flow that tracks what’s being offered and requested",
      ],
      scope: [
        "Mobile UX for scanning, search, and book detail views",
        "Library screens for ownership status (available, reserved, swapped)",
        "Messaging UI with book context (what book is being discussed)",
        "Deep links to demo and repository",
      ],
    },
  },
  {
    eyebrow: "2021",
    title: "Mercedes-Benz B2B Commerce",
    category: "Product & Systems",
    role: "Frontend Engineer · Accenture",
    display: "brand",
    brand: { mark: "mercedes", wordmark: "Mercedes-Benz" },
    layout: "circle",
    media: [
      {
        type: "image",
        src: "/images/mercedes.png",
        alt: "Mercedes-Benz B2B commerce platform",
      },
    ],
    summary: [
      "Global B2B commerce platform for Mercedes-Benz, built with Accenture.",
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
      "A browser-based horse racing simulation exploring randomness, probability, and competitive systems in code — turning simple mathematical rules into a dynamic, unpredictable race.",
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
      "A personal reading tracker that grew from a spreadsheet replacement into a thoughtful product experience, with a focus on clean state management and UI polish.",
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
      "A React project consuming the PokéAPI, focused on clean data-fetching patterns, caching, and fast UI iteration.",
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
