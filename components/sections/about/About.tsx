import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { personalPhotos } from "@/data/photoGallery";
import { ExperienceTabs } from "@/components/ui/ExperienceTabs";
import { experiences } from "@/data/experiences";

export default function About() {
  const coreTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
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
          <div className="mt-6 max-w-2xl space-y-4 text-body-lg text-foreground/70">
            <p>
              I&apos;m a frontend-focused engineer with experience building full-stack applications and scalable, backend-integrated systems. I enjoy turning complex workflows into intuitive user experiences while building codebases that are reliable, maintainable, and easy to evolve.
            </p>
            <p>
              I hold a degree in Computer Engineering from Istanbul Technical University and have been building software since 2018. My work is driven by attention to UI consistency, accessibility, and the engineering details that make products dependable.
            </p>
            <p>
              Outside of work, I enjoy riding my motorcycle, training at the gym, playing guitar, and practicing capoeira. Exploring new places and experiences often inspires how I approach design and problem-solving.
            </p>
                      <div className="space-y-3">
  <h3 className="text-sm font-medium text-foreground">
    Core Technologies
  </h3>

  <p className="text-foreground/70 leading-relaxed">
    {coreTechnologies.join(" • ")}
  </p>
</div>
          </div>

          {/* Work subsection */}
          <div className="mt-24 border-t border-border/20 pt-16">
            <span className="text-meta">Work</span>
            <p className="mt-4 max-w-2xl text-body-lg text-foreground/70">
              Currently, I&apos;m helping build the world&apos;s first complete restaurant
              operating system at{" "}
              <a
                href="https://www.lingapos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/75 underline-offset-4 hover:underline"
              >
                Linga
              </a>
              , developing a comprehensive technology ecosystem for the food
              service industry. Alongside engineering, I enjoy crafting
              thoughtful UI/UX designs in Figma, primarily for mobile
              applications.
            </p>
          </div>
          <ExperienceTabs experiences={experiences} />
        </div>
      </SectionContainer>
    </PageSection>
  );
}