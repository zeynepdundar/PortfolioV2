import { PageSection } from "../ui/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

export default function Experience() {
  return (
    <PageSection
      id="experience"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeader
            title="Experience"
            subtitle="A quick overview of where I've worked."
          />
          <div className="flex flex-col gap-16">
            {/* Linga */}
            <ExperienceItem
              role="Frontend Engineer"
              company="Linga rOS"
              period="Feb 2023 – Present"
              description="Part of the frontend team developing a cloud-based restaurant operating system..."
              logo="/logos/linga_logo.jpeg"
              stack={["Angular", "TypeScript", "RxJS", "Next.js", "CSS"]}
            />
          </div>
          <div className="flex flex-col gap-16">
            <ExperienceItem
              role="Frontend Engineer"
              company="Accenture"
              period="Mar 2021 – May 2022"
              description="Collaborated with an international team to build and release a B2B platform for Mercedes-Benz, successfully launched in 19+ countries."
              logo="/logos/accenture_logo.png"
              link={{
                label: "b2bconnect.mercedes-benz.com",
                href: "https://b2bconnect.mercedes-benz.com",
              }}
              stack={[
                "React",
                "Next.js",
                "Storybook",
                "Electron.js",
                "Webpack",
              ]}
            />
          </div>

        </div>
      </div>
    </PageSection>
  );
}


type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  logo: string; // logo image path or URL
  link?: {
    label: string;
    href?: string;
  };
};


function ExperienceItem({
  role,
  company,
  period,
  description,
  stack,
  link,
  logo,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: Logo + Header | Date */}
      <div className="flex items-start justify-between gap-6">
        {/* Left: Logo + Title */}
        <div className="flex items-start gap-6">
          {/* Logo */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--color-primary)]/30 shadow-sm">
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-8 w-8 object-contain"
            />
          </div>

          {/* Header */}
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-foreground">{role}</h2>
            <h3 className="text-sm text-muted">{company}</h3>
          </div>
        </div>

        {/* Right: Date */}
        <span className="whitespace-nowrap text-xs text-muted">
          {period}
        </span>
      </div>

      {/* Row 2: Content */}
      <div className="flex flex-col gap-4">
        {/* Description */}
        <p className="max-w-3xl leading-relaxed text-muted">
          {description}
        </p>

        {/* Optional link */}
        {link && (
          <a
            href={link.href}
            target="_blank"
            className="w-fit text-sm text-primary hover:underline"
          >
            {link.label}
          </a>
        )}

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-2 pt-1">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-1 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


