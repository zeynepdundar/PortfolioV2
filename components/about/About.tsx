import { PageSection } from "../ui/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

export default function About() {
  return (
    <PageSection id="about" >
<div className="mx-auto max-w-6xl px-6">
  <div className="max-w-3xl">
    {/* Intro */}
    <div className="mb-12">
      <h2 className="text-sm font-medium tracking-widest text-primary">
        Hi
      </h2>

      <p className="mt-2 text-2xl font-semibold relative left-1">
        <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
          I’m Zeynep Dündar
        </span>
      </p>

      {/* Accent divider */}
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent relative left-2" />
    </div>

    {/* Role */}
    <p className="text-xs uppercase tracking-[0.2em] text-muted">
      Frontend Engineer · Design-driven · UX-focused
    </p>

    {/* Description */}
    <p className="mt-6 text-md leading-relaxed text-muted">
      I build clean, performant, and accessible user interfaces with a
      design-minded approach. With 5+ years of experience and a background in
      Computer Engineering from Istanbul Technical University, I’ve worked on
      large-scale products for companies like Mercedes-Benz and Renault Group.
    </p>

    <p className="mt-4 text-md leading-relaxed text-muted">
      Currently, I’m helping build the world’s first complete restaurant
      operating system at{" "}
      <span className="text-foreground font-medium">Linga rOS</span>,
      focusing on scalable frontend architecture and thoughtful user
      experiences.
    </p>
  </div>
</div>


    </PageSection>
  );
}
