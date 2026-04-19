export type Experience = {
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

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Linga rOS",
    period: "2023 – Present",
    description:
      "Built and maintained the back-office UI of a global, cloud-based restaurant operating system. Migrated a large-scale interface to Angular 14 within a 15+ engineer Agile team, working closely with product managers, designers, and engineers to deliver reliable, user-focused features at scale.",
    logo: "/logos/linga_logo.jpeg",
    companyUrl: "https://www.lingapos.com/",
    stack: ["Angular", "TypeScript", "RxJS", "CSS"],

  },
  {
    role: "Frontend Engineer",
    company: "Accenture",
    period: "2021 – 2022",
    description:
      "Contributed to enterprise client projects for Mercedes-Benz and Roche. Built and launched Mercedes-Benz's B2B e-commerce platform across 19+ countries. Designed accessible, reusable UI components and contributed to a shared component library.",
    logo: "/logos/accenture_logo.jpeg",
    companyUrl: "https://www.accenture.com/us-en",
    stack: ["React", "Next.js", "Storybook", "Electron.js", "Webpack"],
    link: {
      label: "View Project",
      href: "https://b2bconnect.mercedes-benz.com/de",
    },
  },
  {
    role: "Full Stack Developer",
    company: "Renault Group",
    period: "2020 – 2021",
    description:
      "Co-developed an internal HR automation platform streamlining payroll, scheduling, and performance tracking, significantly reducing HR operational workload.",
    logo: "/logos/renault_logo.jpeg",
    companyUrl: "https://www.renaultgroup.com/en/",
    stack: ["Java", "Spring Boot", "AngularJS", "PostgreSQL", "React"],
  },
  {
    role: "Software Development Assistance Specialist",
    company: "Softtech",
    period: "2019",
    description:
      "Implemented automated testing procedures, reducing manual testing effort and improving system reliability through increased test coverage.",
    logo: "/logos/softtech_logo.jpeg",
    companyUrl: "https://softtech.com.tr/",
    stack: ["Java", "Selenium", "Cucumber"],
  },
  {
    role: "Software Developer",
    company: "Webbilir Consulting",
    period: "2018 – 2019",
    description:
      "Worked on consulting projects to design and launch websites and early-stage products, collaborating closely with designers and fellow developers.",
    logo: "/logos/webbilir_logo.jpeg",
    companyUrl: "https://webbilir.com/",
    stack: ["Angular", "Firebase", "JavaScript", "C# & .NET", "MSSQL"],
    link: {
      label: "Florist website",
      href: "https://www.jardinerie.com.tr/",
    },
  },
];