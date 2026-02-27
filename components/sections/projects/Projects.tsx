import Image from "next/image";

import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionContainer } from "../../ui/SectionContainer";

const projects = [
  {
    title: "Fast-Paced Horse Racing",
    image: "/images/horse-race.png",
    alt: "Fast-Paced Horse Racing Game",
    summary: [
      "An interactive racing game featuring multiple competitors and real-time animations. Users can generate race schedules, start races, and view results dynamically.",
      "Built with a focus on clean component architecture, predictable state handling, and performance-conscious rendering.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/HorseRacingGame" },
      { label: "Live Demo", href: "https://horse-racing-game-steel.vercel.app/" },
    ],
  },
  {
    title: "Book Trading Platform",
    image: "/images/book-swap.png",
    alt: "Book Trading Platform",
    summary: [
      "A mobile app for book exchanges. Users can scan barcodes to search from 28M+ titles, add books to their collection, chat in real time, and manage seamless book exchanges.",
      "Originally built in 2022 as a passion project, the app continues to grow as a community-driven platform with a long-term vision of expanding beyond books.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://gitlab.com/harmony-org/book-swap/-/tree/dev?ref_type=heads",
      },
      { label: "Watch Demo", href: "https://vimeo.com/1037563566?share=copy" },
    ],
  },
  {
    title: "Shelfie",
    image: "/images/shelfie.png",
    alt: "Shelfie Reading Tracker App",
    summary: [
      "A personal reading tracker designed to help users build consistent reading habits. Log books, track pages read, favorite titles, and explore detailed reading statistics.",
      "What started as a simple spreadsheet replacement evolved into a more pleasant and intuitive experience. The roadmap includes visual charts for tracking favorite genres and authors.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/shelfie" },
      { label: "View Project", href: "https://github.com/zeynepdndr/shelfie" },
    ],
  },
  {
    title: "Pokédex",
    image: "/images/pokedex.png",
    alt: "Pokédex Application",
    summary: [
      "A dynamic application for exploring and learning about Pokémon. Users can browse a full Pokémon list and instantly view detailed information, powered by the Pokémon API.",
      "Built as a fun weekend project driven by curiosity and experimentation, focusing on clean data fetching, UI clarity, and fast iteration.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/zeynepdndr/pokedex" },
      { label: "View Project", href: "https://github.com/zeynepdndr/pokedex" },
    ],
  },
];


export default function Projects() {
  return (
    <PageSection id="projects">
      <SectionContainer>
        <SectionHeader
          title="Projects"
          subtitle="Selected personal and exploratory work"
        />

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          I build projects to explore ideas, test assumptions, and refine my
          approach to frontend architecture and user experience. Some are small
          experiments, others grow into long-term products.
        </p>

        <div className="mt-16 space-y-24">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                {/* Text */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-foreground">
                    {project.title}
                  </h3>

                    <div className="mt-4 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/85">
                    {project.summary.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-6 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 transition hover:text-foreground underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </PageSection>
  );
}
