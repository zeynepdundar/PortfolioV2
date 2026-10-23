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

export type ProjectFeatureIcon =
  | "document"
  | "users"
  | "refresh"
  | "layers"
  | "scan"
  | "chat"
  | "chart"
  | "languages"
  | "component"
  | "globe";

/** Short, icon-led capability line shown on the home card. */
export type ProjectFeature = {
  icon: ProjectFeatureIcon;
  text: string;
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
   *  panel instead of a product screenshot — for confidential / NDA work.
   *  "stack" layers the first three `media` images as overlapping app windows.
   *  "showcase" tilts one or two `media` screens behind a large app-icon tile
   *  carrying the company mark (brand.mark), so the data stays unreadable. */
  display?: "window" | "brand" | "stack" | "showcase";
  brand?: {
    logo?: string;
    mark?: string;
    wordmark?: string;
    accent?: string;
  };
  layout: Layout;
  media: ProjectMediaItem[];
  /** Card image aspect ratio as "width / height" (e.g. "1032 / 776"). Defaults to 16 / 10;
   *  set it to the image's own ratio to show the whole screenshot instead of cropping it. */
  mediaAspect?: string;
  summary: string[];
  metrics?: ProjectMetric[];
  tech?: string[];
  /** Short line shown under the summary on the home card. Falls back to nothing. */
  tags?: string[];
  /** Two short capability lines with icons, shown on the home card. */
  features?: ProjectFeature[];
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
    eyebrow: "ORAXAI",
    title: "Quality Management System",
    category: "Product & Systems",
    role: "Senior Software Engineer · Sole Developer",
    display: "showcase",
    brand: { mark: "orax" },
    layout: "single",
    media: [
      { type: "image", src: "/images/qms/document-overview.webp", alt: "ORAXAI QMS — Document Management overview" },
      { type: "image", src: "/images/qms/annual-training-plan.webp", alt: "ORAXAI QMS — Annual Training Plan" },
      { type: "image", src: "/images/qms/capa-list.webp", alt: "ORAXAI QMS — CAPA records" },
    ],
    summary: [
      "A quality management platform for regulated workflows, covering documents, deviations, CAPAs, and training.",
      "As the sole engineer, I took it from requirements analysis with QA to the domain model, API, and UI, including a three-level permission model.",
    ],
    metrics: [
      { value: "Full-stack", label: "QMS Application" },
      { value: "Portal", label: "Customer Experience" },
      { value: "Enterprise", label: "Operations Platform" },
    ],
    tech: ["Angular", "Nx", "TypeScript", "Node.js", "PostgreSQL", "Playwright"],
    tags: ["Angular", "Nx", "TypeScript", "Node.js", "PostgreSQL", "Playwright"],
    statusNote:
      "Engineered full-stack features for QMS workflows and customer portal capabilities used in real warehouse operations.",
    links: [{ label: "Visit our landing page", href: "https://oraxai.com" }],
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
      "The back office of an enterprise restaurant platform, used for daily restaurant operations and administration.",
      "I migrated its core modules from AngularJS to modern Angular with predictable RxJS/NgRx state, improving performance and making high-traffic screens easier to extend with lower regression risk.",
    ],
    metrics: [
      { value: "Legacy → Modern", label: "Migration" },
      { value: "RxJS / NgRx", label: "State management" },
      { value: "Enterprise", label: "Restaurant platform" },
    ],
    tech: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    tags: ["Angular", "TypeScript", "RxJS", "NgRx"],
    statusNote:
      "Improved performance and maintainability across core back-office modules, supporting high-frequency POS and administrative workflows.",
    links: [{ label: "Company website", href: "https://www.lingapos.com/" }],
  },
  {
    eyebrow: "INDEPENDENT PRODUCT · CO-FOUNDER · MOBILE LEAD",
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
      "A peer-to-peer book exchange app, live on the App Store and Google Play.",
      "Co-founded and launched with a backend engineer. I own the mobile architecture, development, releases, and production monitoring, including ISBN scanning against a 28M+ title catalog and swap workflows with integrated real-time chat.",
    ],
    metrics: [
      { value: "28M+", label: "Book catalog" },
      { value: "iOS & Android", label: "Mobile release" },
      { value: "Real-time", label: "In-app chat" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase", "PostgreSQL", "Next.js"],
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase"],
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
      { label: "Read the case study", href: "/projects/bookswap", placement: "card" },
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
        label: "Website",
        href: "https://www.bookswapapp.com/",
        icon: "website",
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
    eyebrow: "INDEPENDENT PRODUCT · FOUNDER · WEB",
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
      "A bilingual reading tracker for logging books, saving quotes, and exploring reading stats, with no sign-up needed to start.",
      "I designed, built, and launched it solo, owning the Next.js frontend, Node.js API, and PostgreSQL data model. Guests can create an account without losing their reading data.",
    ],
    metrics: [
      { value: "Live", label: "Public web app" },
      { value: "EN / TR", label: "Fully localized" },
      { value: "Monorepo", label: "Web · API · Mobile" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Firebase", "next-intl", "Recharts", "Tailwind CSS"],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase Auth"],
    screens: [
      { src: "/images/myshelfie/landing.webp", caption: "Landing — start a bookshelf, no sign-up needed" },
      { src: "/images/myshelfie/library.webp", caption: "Library — want to read, in progress & finished" },
      { src: "/images/myshelfie/add-book-search.webp", caption: "Add a book — search Google Books or add by hand" },
      { src: "/images/myshelfie/statistics.webp", caption: "Statistics — books and pages read across the year" },
    ],
    statusNote:
      "Google Books search, reading statistics, favorites & quotes, CSV export, guest-to-account sign-in, and self-serve account deletion.",
    links: [
      { label: "Live app", href: "https://myshelfie.space" },
    ],
  },
  {
    eyebrow: "ACCENTURE · FRONTEND ENGINEER · 2021–2022",
    title: "Mercedes-Benz B2B Connect",
    category: "Product & Systems",
    role: "Frontend Engineer · Accenture",
    brand: { mark: "mercedes", wordmark: "Mercedes-Benz" },
    mediaAspect: "1032 / 776",
    layout: "circle",
    media: [
      {
        type: "image",
        src: "/images/b2bconnect.png",
        alt: "Mercedes-Benz B2B Connect platform",
      },
    ],
    summary: [
      "Mercedes-Benz's global B2B portal for partners, live in 19+ markets.",
      "At Accenture, I built frontend modules and shared design-system components, developing and documenting them in Storybook so teams across markets could reuse them to ship consistent, CMS-driven pages on the live platform.",
    ],
    metrics: [
      { value: "19+", label: "Global markets" },
      { value: "10+", label: "Shared UI components" },
      { value: "Storybook", label: "Design system" },
    ],
    tech: ["React", "Next.js", "Redux", "Storybook", "Umbraco CMS"],
    tags: ["React", "Next.js", "Redux", "Storybook", "Umbraco CMS"],
    statusNote:
      "Built resilient, accessible, and highly reusable React UI components integrated into a multi-market global portal.",
    links: [{ label: "Live platform", href: "https://b2bconnect.mercedes-benz.com/de" }],
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
      "Browser-based horse racing simulation exploring probability-driven gameplay and real-time race dynamics.",
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
      "React application exploring API caching, virtualized lists, and component state management.",
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