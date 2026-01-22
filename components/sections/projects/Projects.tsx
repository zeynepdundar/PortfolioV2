import Image from "next/image";

import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";

export default function Projects() {
  return (
    <PageSection id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeader
            title="Projects"
            subtitle="Selected projects showcasing my personal work"
          />

          <p className="mt-6 text-md leading-relaxed text-muted">
            I develop projects both to explore new frameworks and to bring ideas
            to life. Some projects are learning playgrounds, while others evolve
            into fully launched products.
          </p>

          {/* Project Card */}
          <div className="mt-12 rounded-2xl border border-border bg-background/50 p-6 shadow-sm transition hover:shadow-md">
            <div className="grid gap-8">
              {/* Image */}
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/horse-race.png"
                  alt="Fast-Paced Horse Racing Game"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Fast-Paced Horse Racing
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Interactive racing game & state-driven animations
                  </p>
                </div>

                {/* Tech stack */}
                <ul className="flex flex-wrap gap-2">
                  {["React", "Vite", "TypeScript", "State Management"].map(
                    (tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tech}
                      </li>
                    )
                  )}
                </ul>

                <p className="text-muted leading-relaxed">
                  An interactive racing game featuring multiple competitors and
                  real-time animations. Users can generate race schedules, start
                  races, and view results dynamically.
                </p>

                <p className="text-muted leading-relaxed">
                  Built with a focus on clean component architecture,
                  predictable state handling, and performance-conscious
                  rendering.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/zeynepdndr/HorseRacingGame"
                    target="_blank"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://horse-racing-game-steel.vercel.app/"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Project Card */}

          {/* Project Card */}
          <div className="mt-12 rounded-2xl border border-border bg-background/50 p-6 shadow-sm transition hover:shadow-md">
            <div className="grid gap-8">
              {/* Image */}
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/book-swap.png"
                  alt="Book Trading Platform"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Book Trading Platform
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Sustainable peer-to-peer book exchange mobile app
                  </p>
                </div>

                {/* Tech stack */}
                <ul className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Expo",
                    "AWS (S3, EC2)",
                    "Docker",
                    "Python",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-muted leading-relaxed">
                  A mobile app for book exchanges. Users can scan
                  barcodes to search from 28M+ titles, add books to their collection, chat
                  in real time, and manage seamless book exchanges.
                </p>

                <p className="text-muted leading-relaxed">
                  Originally built in 2022 as a passion project, the app continues to grow
                  as a community-driven platform with a long-term vision of expanding
                  beyond books.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="https://gitlab.com/harmony-org/book-swap/-/tree/dev?ref_type=heads"
                    target="_blank"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://vimeo.com/1037563566?share=copy"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Project Card */}

          {/* Project Card */}
          <div className="mt-12 rounded-2xl border border-border bg-background/50 p-6 shadow-sm transition hover:shadow-md">
            <div className="grid gap-8">
              {/* Image */}
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/shelfie.png"
                  alt="Shelfie Reading Tracker App"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Shelfie
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Personal reading tracker & habit-building app
                  </p>
                </div>

                {/* Tech stack */}
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Firebase",
                    "React",
                    "Google Books API",
                    "Webpack",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-muted leading-relaxed">
                  A personal reading tracker designed to help users build consistent
                  reading habits. Log books, track pages read, favorite titles, and explore
                  detailed reading statistics.
                </p>

                <p className="text-muted leading-relaxed">
                  What started as a simple spreadsheet replacement evolved into a more
                  pleasant and intuitive experience. The roadmap includes visual charts
                  for tracking favorite genres and authors.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/zeynepdndr/shelfie"
                    target="_blank"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/zeynepdndr/shelfie"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Project Card */}

          {/* Project Card */}
          <div className="mt-12 rounded-2xl border border-border bg-background/50 p-6 shadow-sm transition hover:shadow-md">
            <div className="grid gap-8">
              {/* Image */}
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/pokedex.png"
                  alt="Pokédex Application"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Pokédex
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Pokémon explorer powered by public APIs
                  </p>
                </div>

                {/* Tech stack */}
                <ul className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "GraphQL",
                    "Next.js",
                    "Vercel",
                    "CSS",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-muted leading-relaxed">
                  A dynamic application for exploring and learning about Pokémon. Users can
                  browse a full Pokémon list and instantly view detailed information,
                  powered by the Pokémon API.
                </p>

                <p className="text-muted leading-relaxed">
                  Built as a fun weekend project driven by curiosity and experimentation,
                  focusing on clean data fetching, UI clarity, and fast iteration.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/zeynepdndr/pokedex"
                    target="_blank"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/zeynepdndr/pokedex"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Project Card */}

        </div>
      </div>
    </PageSection>
  );
}
