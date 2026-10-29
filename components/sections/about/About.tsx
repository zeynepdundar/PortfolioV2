import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Subsection } from "@/components/ui/Subsection";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { personalPhotos } from "@/data/photoGallery";
import { ExperienceTabs } from "@/components/ui/ExperienceTabs";
import { experiences } from "@/data/experiences";

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
        <PhotoGallery photos={personalPhotos} />
        <div className="w-full">
          <SectionHeader
            title="About Me"
            subtitle="A bit about me and my experience"
          />

          {/* About narrative */}
          <div className="mt-10 max-w-2xl space-y-4 text-body-lg text-foreground/70">
            <p>
              I&apos;m a software engineer with a frontend focus, building web and cross-platform mobile applications since 2018. My experience spans enterprise logistics systems and products built from scratch. I enjoy working where engineering decisions directly shape the user experience.
            </p>
            <p>
              I hold a B.S. in Computer Engineering from Istanbul Technical University. I take a hands-on approach across the stack, with particular attention to frontend architecture, consistent interfaces, and performance. I like understanding how the whole product works and carrying that understanding into the details people interact with.
            </p>
            <p>
              Outside of work, you&apos;ll find me riding my motorcycle, training at the gym, playing guitar, or practicing capoeira. I&apos;m always curious about new places and experiences.
            </p>

            <div className="space-y-2 pt-6">
              <h3 className="text-meta">Core Technologies</h3>
              <p className="text-body text-foreground/70">
                {coreTechnologies.join(" · ")}
              </p>
            </div>
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