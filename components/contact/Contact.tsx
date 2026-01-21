import { PageSection } from "../ui/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

export default function Contact() {
  return (
    <PageSection id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeader
            title="Projects"
            subtitle="Selected projects showcasing my work and experience."
          />

          <div className="mt-16">
            <article className="grid gap-12">
              {/* Text */}
              <div>
                <h3 className="text-xl font-medium text-foreground">
                  Fast-Paced Horse Racing
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {["React", "Vite", "TypeScript", "State Management"].map(
                    (tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border px-2 py-1 text-xs text-muted"
                      >
                        {tech}
                      </li>
                    )
                  )}
                </ul>

                <p className="mt-6 text-muted leading-relaxed">
                  An interactive racing game featuring multiple competitors and
                  real-time animations. Users can generate race schedules, start
                  races, and view results dynamically.
                </p>

                <p className="mt-4 text-muted leading-relaxed">
                  Focused on clean component architecture, predictable state
                  handling, and performance-conscious rendering.
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://github.com/zeynepdndr/HorseRacingGame"
                    target="_blank"
                    className="text-sm text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://horse-racing-game-steel.vercel.app/"
                    target="_blank"
                    className="text-sm text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageSection>

  );
}
