export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <h2 className="mb-16 text-3xl font-semibold text-foreground">
        Experience
      </h2>
      A quick overview of where I've worked.
      <div className="flex flex-col gap-16">
        {/* Linga */}
        <ExperienceItem
          role="Frontend Engineer"
          company="Linga rOS"
          period="Feb 2023 – Present"
          description="Part of the frontend team developing a cloud-based restaurant operating system, focusing on revamping and modernizing the back-office UI to improve usability, performance, and scalability."
          stack={["Angular", "TypeScript", "RxJS", "Next.js", "CSS"]}
        />

        {/* Accenture */}
        <ExperienceItem
          role="Frontend Engineer"
          company="Accenture"
          period="Mar 2021 – May 2022"
          description="Collaborated with an international team to build and launch a large-scale B2B platform for Mercedes-Benz, released in 19+ countries."
          link={{
            label: "Live project",
            href: "https://b2bconnect.mercedes-benz.com",
          }}
          stack={["React", "Next.js", "Storybook", "Electron.js", "Webpack"]}
        />

        {/* Renault */}
        <ExperienceItem
          role="Full Stack Developer"
          company="Renault Group"
          period="Oct 2020 – Jan 2021"
          description="Developed a full-stack internal web application to automate HR processes, including payroll, scheduling, and performance tracking."
          stack={["Java", "Spring Boot", "AngularJS", "PostgreSQL", "React"]}
        />

        {/* Softtech */}
        <ExperienceItem
          role="Software Development Assistance Specialist"
          company="Softtech"
          period="Jul 2019 – Nov 2019"
          description="Implemented automated testing workflows to reduce manual testing effort and improve system reliability."
          stack={["Java", "Selenium", "Cucumber"]}
        />

        {/* Webbilir */}
        <ExperienceItem
          role="Software Developer"
          company="Webbilir Consulting"
          period="Jul 2018 – Jun 2019"
          description="Built and launched a single-page e-commerce application with payment and shipment features."
          link={{
            label: "Florist website",
          }}
          stack={["Angular", "Firebase", "JavaScript", "C#", ".NET", "MSSQL"]}
        />
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
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
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium text-foreground">
          {role} · {company}
        </h3>
        <span className="text-sm text-muted">{period}</span>
      </div>

      {/* Description */}
      <p className="max-w-3xl text-muted leading-relaxed">{description}</p>

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
      <ul className="flex flex-wrap gap-2 pt-2">
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
  );
}
