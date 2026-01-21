import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";

export default function About() {
  return (
    <PageSection id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Intro */}
          <header className="flex items-center gap-6">
            {/* Profile photo */}
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
              <img
                src="/images/profile.jpg"
                alt="Zeynep Dündar"
                className="h-full w-full object-cover grayscale contrast-90 brightness-95"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-widest text-primary">
                Hi
              </span>

              <h1 className="mt-1 text-2xl font-semibold">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                  I’m Zeynep Dündar
                </span>
              </h1>
            </div>
          </header>

          {/* Accent divider */}
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />

          {/* Role */}
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
            Frontend Engineer · Design-driven · UX-focused
          </p>

          {/* Description */}
          <div className="mt-6 flex flex-col gap-4 text-md leading-relaxed text-muted">
            <p>
              I build clean, performant, and accessible user interfaces with a design-minded approach. With 5+ years of experience and a degree in Computer Engineering from Istanbul Technical University, I’ve contributed to large-scale products for global companies like Mercedes-Benz and Renault Group.
            </p>

            <p>
              Currently, I’m helping build the world’s first complete restaurant operating system at Linga rOS, creating a comprehensive technology ecosystem for the food service industry. Beyond coding, I enjoy crafting UI/UX designs in Figma, primarily for mobile applications. Find me on LinkedIn
              .
            </p>

            <p>
            I began my development journey in 2018, working across consulting firms, startups, banks, and large enterprises before specializing in frontend engineering. Along the way, I’ve built everything from e-commerce apps with Vanilla JS, jQuery, and Firebase to complex B2B platforms using React, Next.js, and Angular.            </p>

            <p>
            When I'm not coding, I enjoy riding my motorcycle, staying active at the gym, exploring new places, playing guitar, and practicing capoeira.
            </p>
          </div>
        </div>
      </div>
    </PageSection>

  );
}
