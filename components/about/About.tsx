import { SectionHeader } from "../ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionHeader
            title="About"
            subtitle="Design-minded frontend engineer"
          />
          <h1 className="text-4xl font-semibold text-foreground">
            Zeynep Dündar
          </h1>

          <p className="mt-6 text-md text-muted">Frontend Engineer</p>

          <p className="mt-6 text-md text-muted leading-relaxed">
            With a design-minded approach, I specialize in building performant,
            clean, and accessible user experiences. I hold a degree in Computer
            Engineering from Istanbul Technical University. Over the years, I’ve
            contributed to development projects for companies like Accenture and
            Renault Group. Currently, I’m helping build the world’s first
            complete restaurant operating system at Linga rOS.
          </p>
        </div>
      </div>
    </section>
  );
}
