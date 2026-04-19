type Layout = "scattered" | "overlap" | "fan" | "single";

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
  title: string;
  layout: Layout;
  media: ProjectMediaItem[];
  summary: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "At The Races",
    layout: "scattered",
    media: [
      { type: "video", src: "/videos/horse-race.mp4", alt: "Horse race gameplay" },
      { type: "image", src: "/images/horse-race-list.png", alt: "Race finish" },
      { type: "image", src: "/images/horse-race-landing.png", alt: "At The Races – Landing screen" },
    ],
    summary: [
      "A racing simulation built for fun, driven by curiosity about modeling real-world randomness in the browser. The core challenge was designing a race engine using math-calculating speed variance and position updates each tick with no game library, just logic.",
      "Built with Vue.js and Vuex for centralized race state. All animations handled purely in CSS, keeping the bundle lean and the motion smooth.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/HorseRacingGame" },
      { label: "Live Preview", href: "https://horse-racing-game-steel.vercel.app/" },
    ],
  },
  {
    title: "Book Trading Platform",
    layout: "overlap",
    media: [
      { type: "image", src: "/images/book-swap.png", alt: "Book swap home" },
      { type: "video", src: "/videos/book-swap.mp4", alt: "Book swap demo" },
      { type: "image", src: "/images/book-swap.png", alt: "Book swap detail" },
    ],
    summary: [
      "A mobile app for book exchanges. Users can scan barcodes to search from 28M+ titles, add books to their collection, chat in real time, and manage seamless book exchanges.",
      "Originally built in 2022 as a passion project, the app continues to grow as a community-driven platform with a long-term vision of expanding beyond books.",
    ],
    links: [
      { label: "GitHub", href: "https://gitlab.com/harmony-org/book-swap/-/tree/dev?ref_type=heads" },
      { label: "Watch Demo", href: "https://vimeo.com/1037563566?share=copy" },
    ],
  },
  {
    title: "Shelfie",
    layout: "fan",
    media: [
      { type: "image", src: "/images/shelfie.png", alt: "Shelfie app" },
      { type: "video", src: "/videos/shelfie.mp4", alt: "Shelfie demo" },
    ],
    summary: [
      "A personal reading tracker built with React. Started as a spreadsheet replacement and evolved into a proper app — a good exercise in deciding when a side tool deserves real product thinking.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/shelfie" },
      { label: "View Project", href: "https://github.com/zeynepdndr/shelfie" },
    ],
  },
  {
    title: "Pokédex",
    layout: "single",
    media: [{ type: "video", src: "/videos/pokedex.mp4", alt: "Pokédex demo" }],
    summary: [
      "A React weekend project consuming the PokéAPI. Focused on clean data fetching patterns and fast UI iteration — useful as a low-stakes sandbox for experimenting with new approaches.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/pokedex" },
      { label: "View Project", href: "https://github.com/zeynepdndr/pokedex" },
    ],
  },
];
