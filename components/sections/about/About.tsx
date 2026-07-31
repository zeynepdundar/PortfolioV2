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
    "React Native",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Gluestack UI",
    "Angular",
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
              I&apos;m a software engineer with extensive experience in frontend architecture, full-stack application development, and cross-platform mobile solutions. I enjoy working on products where engineering decisions directly shape user experience from complex enterprise logistics systems to products built from zero.
            </p>
            <p>
              I hold a B.S. in Computer Engineering from Istanbul Technical University and have been building software professionally since 2018. My work is driven by strong design intuition, tight UI consistency, and the engineering details that make products fast and dependable at scale.
            </p>
            <p>
              Outside of work, I enjoy riding my motorcycle, training at the gym, playing guitar, and practicing capoeira. Exploring new places and experiences often inspires how I approach design and problem-solving.
            </p>

            <div className="pt-2 space-y-3">
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
              Currently, I&apos;m working as a Software Engineer at{" "}
              <a
                href="https://oraxai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 font-medium underline-offset-4 hover:underline hover:text-foreground"
              >
                OraxAI
              </a>
              , building full-stack applications and customer portals for an AI-powered enterprise logistics platform. Alongside frontend and mobile architecture, I frequently craft thoughtful UI/UX designs in Figma, bringing ideas cleanly from concept to code.
            </p>
          </div>

          <ExperienceTabs experiences={experiences} />
        </div>
      </SectionContainer>
    </PageSection>
  );
}