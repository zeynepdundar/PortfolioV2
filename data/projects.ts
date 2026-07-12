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

export type Project = {
  slug?: string;
  eyebrow?: string;
  title: string;
  category: ProjectCategory;
  layout: Layout;
  media: ProjectMediaItem[];
  summary: string[];
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
    layout: "single",
    media: [
      { type: "image", src: "/images/oraxai.png", alt: "OraxAI platform" },
    ],
    summary: [
      "AI-powered enterprise operations platform connecting warehouse, transport, learning, traceability, and quality systems in a unified ecosystem.",
      "Built full-stack with secure auth, real-time data pipelines, API integrations, and scalable cloud architecture.",
    ],
    statusNote:
      "Actively evolving with new AI capabilities, workflow automation features, and ongoing infrastructure improvements.",
    links: [
      { label: "Live Platform", href: "https://oraxai.com" },
    ],
  },
  {
    slug: "book-trading-platform",
    eyebrow: "Side Project",
    title: "Book Trading Platform",
    category: "Product & Systems",
    layout: "overlap",
    media: [
      { type: "image", src: "/images/book-swap.png", alt: "Book swap home" },
      { type: "video", src: "/videos/book-swap.mp4", alt: "Book swap demo" },
      { type: "image", src: "/images/book-swap.png", alt: "Book swap detail" },
    ],
    summary: [
      "A book exchange platform that helps readers discover, offer, and exchange books with each other, powered by a catalog of 28M+ books.",
      "Built independently from concept to product, including mobile experience, frontend architecture, and supporting web presence."],
    links: [
      { label: "Live Website", href: "https://vimeo.com/1037563566?share=copy" },
    ],
    details: {
      headline: "A mobile-first platform for discovering, listing, and exchanging books with real-time chat.",
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
    }
  },
  {
    eyebrow: "2021",
    title: "Mercedes-Benz B2B Commerce",
    category: "Product & Systems",
    layout: "circle",
    media: [
      { type: "image", src: "/images/mercedes.png", alt: "Mercedes-Benz B2B commerce platform" },
    ],
    summary: [
      "Contributed to Mercedes-Benz’s global B2B commerce platform as part of Accenture’s digital commerce team, supporting rollout across 19+ markets.",
      "Focused on frontend architecture, reusable UI systems, and Storybook-based design components.",
    ],
    statusNote:
      "Contributed to the platform's international rollout while helping establish a scalable component architecture for future market expansion.",
    links: [
      { label: "Mercedes-Benz", href: "https://www.mercedes-benz.com/" },
    ],
  },
  {
    eyebrow: "Side Project",
    title: "At The Races",
    category: "Experiments",
    layout: "scattered",
    media: [
      { type: "video", src: "/videos/horse-race.mp4", alt: "Horse race gameplay" },
      { type: "image", src: "/images/horse-race-list.png", alt: "Race finish" },
      { type: "image", src: "/images/horse-race-landing.png", alt: "At The Races – Landing screen" },
    ],
    summary: [
      "A browser-based horse racing simulation exploring randomness, probability, and competitive systems through code.",
      "The project focused on turning simple mathematical rules into a dynamic and unpredictable racing experience.",
    ],
    statusNote: "Currently in maintenance mode, with structural updates planned to scale the core trading engine beyond books.",
    links: [
      { label: "Live Preview", href: "https://horse-racing-game-steel.vercel.app/" },
    ],
  },

  {
    eyebrow: "Side Project",
    title: "Shelfie",
    category: "Experiments",
    layout: "fan",
    media: [
      { type: "image", src: "/images/shelfie.png", alt: "Shelfie app" },
      { type: "video", src: "/videos/shelfie.mp4", alt: "Shelfie demo" },
    ],
    summary: [
      "A personal reading tracker built with React.",
      "Started as a spreadsheet replacement and gradually evolved into a more thoughtful product experience."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/shelfie" },
    ],
  },
  {
    eyebrow: "Side Project",
    title: "Pokédex",
    category: "Experiments",
    layout: "single",
    media: [{ type: "video", src: "/videos/pokedex.mp4", alt: "Pokédex demo" }],
    summary: [
      "A React weekend project consuming the PokéAPI. Focused on clean data fetching patterns and fast UI iteration.",
    ],
    links: [
      { label: "View Project", href: "https://github.com/zeynepdndr/pokedex" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  console.log("slug:", slug);
  return projects.find((p) => p.slug === slug);
}