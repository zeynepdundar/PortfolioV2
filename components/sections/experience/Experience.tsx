import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";

export default function Experience() {
  return (
    <PageSection id="experience">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeader
            title="Experience"
            subtitle="A quick overview of where I’ve worked."
          />

          <div className="flex flex-col gap-20">
            {/* Linga */}
            <ExperienceItem
              role="Frontend Engineer"
              company="Linga rOS"
              period="2023 – Present"
              description="Built and maintained the back-office UI of a global, cloud-based restaurant operating system. Migrated a large-scale interface to Angular 14 within a 15+ engineer Agile team, working closely with product managers, designers, and engineers to deliver reliable, user-focused features at scale."
              logo="/logos/linga_logo.jpeg"
              stack={["Angular", "TypeScript", "RxJS", "CSS"]}
              companyUrl="https://www.lingapos.com/"
            />

            {/* Accenture */}
            <ExperienceItem
              role="Frontend Engineer"
              company="Accenture"
              period="2021 – 2022"
              description="Contributed to enterprise client projects for Mercedes-Benz and Roche. Built and successfully launched Mercedes-Benz’s B2B e-commerce platform across 19+ countries. Designed and implemented accessible, reusable UI components, contributing to a shared library for improved consistency and faster development."
              logo="/logos/accenture_logo.jpeg"
              companyUrl="https://www.accenture.com/us-en"
              stack={[
                "React",
                "Next.js",
                "Storybook",
                "Electron.js",
                "Webpack",
              ]}
              link={{
                label: "Mercedes-Benz B2B Platform",
                href: "https://b2bconnect.mercedes-benz.com/de",
              }}
            />

            {/* Renault */}
            <ExperienceItem
              role="Full Stack Developer"
              company="Renault Group"
              period="2020 – 2021"
              description="Co-developed an internal HR automation platform for Renault, streamlining payroll, scheduling, and performance tracking, which reduced HR operational time"
              logo="/logos/renault_logo.jpeg"
              companyUrl="https://www.renaultgroup.com/en/"
              stack={[
                "Java",
                "Spring Boot",
                "AngularJS",
                "PostgreSQL",
                "React",
              ]}
            />

            {/* Softtech */}
            <ExperienceItem
              role="Software Development Assistance Specialist"
              company="Softtech"
              period="2019 – 2019"
              description="Implemented automated testing procedures, reducing manual testing effort and improving system reliability through increased test coverage."
              logo="/logos/softtech_logo.jpeg"
              companyUrl="https://softtech.com.tr/"
              stack={["Java", "Selenium", "Cucumber"]}
            />

            {/* Webbilir */}
            <ExperienceItem
              role="Software Developer"
              company="Webbilir Consulting"
              period="2018 – 2019"
              description="Collaborated with fellow student developers and engineers on consulting projects to design and launch new brands and websites."
              logo="/logos/webbilir_logo.jpeg"
              companyUrl="https://webbilir.com/"
              stack={[
                "Angular",
                "Firebase",
                "JavaScript",
                "C# & .NET",
                "MSSQL",
              ]}
              link={{
                label: "Florist website",
                href: "https://www.jardinerie.com.tr/",
              }}
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
  logo: string;
  companyUrl: string,
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
  companyUrl,
  link,
  logo,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between gap-6">
        {/* Left: logo + titles */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-border/40 bg-muted/20 flex items-center justify-center">
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-full w-full object-contain"
              />
            </div>
          </a>


          {/* Text */}
          <div className="flex flex-col leading-tight">
            <h2 className="text-sm font-medium text-foreground">
              {role}
            </h2>
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1 text-xs text-muted hover:text-foreground"
            >
              <span>{company}</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Right: date */}
        <span className="text-xs text-muted leading-tight">
          {period}
        </span>
      </div>

      {/* Content */}
      <p className="leading-relaxed text-muted">{description}</p>

      {link && (
        <a
          href={link.href}
          target="_blank"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          {link.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14a3 3 0 004.242 0l3.536-3.536a3 3 0 00-4.242-4.242l-1.414 1.414"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10a3 3 0 00-4.242 0L6.222 13.778a3 3 0 004.242 4.242l1.414-1.414"
            />
          </svg>
        </a>
      )}

      <ul className="flex flex-wrap gap-2 pt-1">
        {stack.map((tech) => (
          <li key={tech} className="rounded-md border border-border px-2 py-1 text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>

    </div>

  );
}
