import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Subsection } from "@/components/ui/Subsection";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { personalPhotos } from "@/data/photoGallery";
import { ExperienceTabs } from "@/components/ui/ExperienceTabs";
import { experiences } from "@/data/experiences";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const coreTechnologies = [
    "React",
    "React Native",
    "TypeScript",
    "Angular",
    "Next.js",
    "Node.js",
  ];

  return (
    <PageSection id="about">
      <SectionContainer>
        <PhotoGallery photos={personalPhotos} className="mb-10" />
        <div className="w-full">
          <SectionHeader
            title="About Me"
            subtitle="A bit about me and my experience"
          />

          {/* About narrative */}
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div className="max-w-2xl space-y-5 text-body-lg text-foreground/70">
              <p className="text-foreground">
                I&apos;m a software engineer with a frontend focus, building web and cross-platform mobile applications since 2018.
              </p>
              <p>
                My experience spans enterprise logistics systems and products built from scratch. I enjoy working where engineering decisions directly shape the user experience.
              </p>
              <p>
                I hold a B.S. in Computer Engineering from Istanbul Technical University. I take a hands-on approach across the stack, with particular attention to frontend architecture, consistent interfaces, and performance. I like understanding how the whole product works and carrying that understanding into the details people interact with.
              </p>
              <p>
                Outside of work, you&apos;ll find me riding my motorcycle, training at the gym, playing guitar, or practicing capoeira. I&apos;m always curious about new places and experiences.
              </p>
            </div>

            <aside className="lg:self-start lg:border-l lg:border-foreground/10 lg:pl-10">
              <h3 className="text-meta">Core Technologies</h3>
              <ul className="mt-6 grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-8 gap-y-3 text-body text-foreground/80">
                {coreTechnologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="mt-8 border-t border-foreground/10 pt-6">
                <a
                  href="/docs/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-accent pb-1 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
                >
                  View my resume
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>

          {/* Work subsection */}
          <Subsection
            label="Work"
            description={
              <p>
              Currently, I&apos;m working as a Software Engineer at{" "}
              <a
                href="https://oraxai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 font-medium underline-offset-4 transition-colors duration-300 hover:underline hover:text-accent"
              >
                OraxAI
              </a>
              , building full-stack applications and customer portals for an AI-powered enterprise logistics platform. Alongside frontend and mobile architecture, I frequently craft thoughtful UI/UX designs in Figma, bringing ideas cleanly from concept to code.
              </p>
            }
          >
            <ExperienceTabs experiences={experiences} />
          </Subsection>
        </div>
      </SectionContainer>
    </PageSection>
  );
}