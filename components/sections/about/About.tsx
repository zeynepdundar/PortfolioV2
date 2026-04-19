import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { personalPhotos } from "@/data/photoGallery";
import { ExperienceTabs } from "@/components/ui/ExperienceTabs";
import { experiences } from "@/data/experiences";

export default function About() {
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
          <div className="mt-6 max-w-2xl space-y-4 text-body-lg text-foreground/55">
            <p>
              I&apos;m a fullstack engineer who enjoys working where design meets code. I care about quality in a deeply human sense how interfaces feel, how intuitive they are, and how small details influence trust and ease. At the same time, I think beyond the interface, building systems that are reliable, maintainable, and thoughtfully structured end to end.
            </p>
            <p>
              I hold a degree in Computer Engineering from Istanbul Technical
              University and have been working as a developer since 2018. My
              background naturally draws me toward UI consistency, accessibility,
              and maintainable systems the unglamorous details that make
              products feel solid, reliable, and trustworthy.
            </p>
            <p>
              Outside of work, I reset by riding my motorcycle, training at the
              gym, playing guitar, and practicing capoeira. I love exploring new
              places and experiences; they often find their way back into my
              work in unexpected ways.
            </p>
            <p> Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-foreground/65">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Tailwind CSS",
                "Node.js",
                "Firebase",
                "AWS",
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span
                    className="text-[var(--primary)] text-sm"
                    aria-hidden="true"
                  >
                    ▹
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Work subsection */}
          <div className="mt-24 border-t border-border/20 pt-16">
            <span className="text-meta text-muted-foreground/40">Work</span>
            <p className="mt-4 max-w-2xl text-body-lg text-foreground/55">
              Currently, I&apos;m helping build the world&apos;s first complete restaurant
              operating system at{" "}
              <a
                href="https://www.lingapos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/75 underline-offset-4 hover:underline"
              >
                Linga rOS
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