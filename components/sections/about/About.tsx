import Image from "next/image";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { personalPhotos } from "@/data/photoGallery";


type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  logo: string;
  companyUrl: string;
  link?: {
    label: string;
    href?: string;
  };
};

export function ExperienceItem({
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
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
        {/* Left: logo + titles */}
        <div className="flex items-center gap-2.5">

          <a href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-md border border-border/20 bg-background/80 shadow-[0_6px_18px_-12px_rgba(0,0,0,0.2)] flex items-center justify-center p-2">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={32}
                height={32}
                className="object-contain rounded-sm opacity-90"
              />
            </div>
          </a>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <h2 className="text-base sm:text-lg font-light tracking-tight text-foreground/75">
              {role}
            </h2>
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-muted hover:text-foreground/75 transition"
            >
              {company}
            </a>
          </div>
        </div>

        {/* Right: date */}
        <span className="text-[10px] sm:text-xs text-muted/70 leading-snug rounded-full border border-border/10 bg-muted/5 px-3 py-1">
          {period}
        </span>
      </div>

      {/* Content */}
      <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/55">
        {description}
      </p>

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-foreground/55 hover:text-foreground/75 transition before:content-['↗'] before:mr-1.5 before:text-muted-foreground/30"          >
          {link.label}
        </a>
      )}
    </div>
  );
}

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
          <div className="mt-6 max-w-2xl space-y-4 text-sm sm:text-base font-light leading-relaxed text-foreground/55">
            <p>
              I'm a frontend engineer who enjoys working where design meets code.
              I care about quality in a deeply human sense how interfaces feel,
              how intuitive they are, and how small details influence trust and
              ease. I pay close attention to perception, motion, and interaction,
              and I'm the kind of person who notices when something feels off and
              takes the time to fix it.
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
            <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/40 font-medium">
              Work
            </span>

            <p className="mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-foreground/55">
              Currently, I'm helping build the world's first complete restaurant
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

          {/* Experience list */}
          <div className="mt-20 flex flex-col gap-16">
            <ExperienceItem
              role="Frontend Engineer"
              company="Linga rOS"
              period="2023 – Present"
              description="Built and maintained the back-office UI of a global, cloud-based restaurant operating system. Migrated a large-scale interface to Angular 14 within a 15+ engineer Agile team, working closely with product managers, designers, and engineers to deliver reliable, user-focused features at scale."
              logo="/logos/linga_logo.jpeg"
              stack={["Angular", "TypeScript", "RxJS", "CSS"]}
              companyUrl="https://www.lingapos.com/"
            />

            <ExperienceItem
              role="Frontend Engineer"
              company="Accenture"
              period="2021 – 2022"
              description="Contributed to enterprise client projects for Mercedes-Benz and Roche. Built and launched Mercedes-Benz's B2B e-commerce platform across 19+ countries. Designed accessible, reusable UI components and contributed to a shared component library."
              logo="/logos/accenture_logo.jpeg"
              companyUrl="https://www.accenture.com/us-en"
              stack={["React", "Next.js", "Storybook", "Electron.js", "Webpack"]}
              link={{
                label: "Mercedes-Benz B2B Platform",
                href: "https://b2bconnect.mercedes-benz.com/de",
              }}
            />

            <ExperienceItem
              role="Full Stack Developer"
              company="Renault Group"
              period="2020 – 2021"
              description="Co-developed an internal HR automation platform streamlining payroll, scheduling, and performance tracking, significantly reducing HR operational workload."
              logo="/logos/renault_logo.jpeg"
              companyUrl="https://www.renaultgroup.com/en/"
              stack={["Java", "Spring Boot", "AngularJS", "PostgreSQL", "React"]}
            />

            <ExperienceItem
              role="Software Development Assistance Specialist"
              company="Softtech"
              period="2019"
              description="Implemented automated testing procedures, reducing manual testing effort and improving system reliability through increased test coverage."
              logo="/logos/softtech_logo.jpeg"
              companyUrl="https://softtech.com.tr/"
              stack={["Java", "Selenium", "Cucumber"]}
            />

            <ExperienceItem
              role="Software Developer"
              company="Webbilir Consulting"
              period="2018 – 2019"
              description="Worked on consulting projects to design and launch websites and early-stage products, collaborating closely with designers and fellow developers."
              logo="/logos/webbilir_logo.jpeg"
              companyUrl="https://webbilir.com/"
              stack={["Angular", "Firebase", "JavaScript", "C# & .NET", "MSSQL"]}
              link={{
                label: "Florist website",
                href: "https://www.jardinerie.com.tr/",
              }}
            />
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}