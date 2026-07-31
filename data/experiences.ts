export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack?: string[];
  logo: string;
  companyUrl: string;
  link?: {
    label: string;
    href: string;
  };
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "OraxAI",
    period: "Apr 2026 – Present",
    description:
      "Architecting and delivering full-stack enterprise solutions for AI-powered logistics platform workflows. Building Quality Management Systems (QMS) and scalable customer portals using React, TypeScript, and modern frontend design systems.",
    logo: "/logos/orax.png",
    companyUrl: "https://oraxai.com",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Figma"],
  },
  {
    role: "Frontend Engineer",
    company: "LINGA",
    period: "Feb 2023 – Mar 2026",
    description:
      "Built and maintained the back-office UI of a global, cloud-based restaurant operating system. Migrated large-scale legacy interfaces to Angular within a 15+ engineer Agile team, collaborating closely with product managers and designers to deliver high-reliability features at scale.",
    logo: "/logos/linga_logo.jpeg",
    companyUrl: "https://www.lingapos.com/",
    stack: ["Angular", "TypeScript", "RxJS", "Sass"],
  },
  {
    role: "Frontend Engineer",
    company: "Accenture",
    period: "Mar 2021 – Apr 2022",
    description:
      "Contributed to enterprise client projects for Mercedes-Benz and Roche. Built and launched Mercedes-Benz's B2B e-commerce platform across 19+ countries. Designed accessible, reusable UI components and contributed to shared design system libraries.",
    logo: "/logos/accenture_logo.jpeg",
    companyUrl: "https://www.accenture.com/us-en",
    stack: ["React", "Next.js", "TypeScript", "Storybook", "Electron"],
    link: {
      label: "Mercedes-Benz B2B Connect",
      href: "https://b2bconnect.mercedes-benz.com/de",
    },
  },
  {
    role: "Software Engineer (Part-Time)",
    company: "Groupe Renault",
    period: "Sep 2020 – Jan 2021",
    description:
      "Co-developed an internal HR automation platform streamlining payroll, scheduling, and performance tracking, significantly reducing operational workload across departments.",
    logo: "/logos/renault_logo.jpeg",
    companyUrl: "https://www.renaultgroup.com/en/",
    stack: ["React", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    role: "Software Engineer (Part-Time)",
    company: "VakıfBank",
    period: "Nov 2019 – Sep 2020",
    description:
      "Worked on core banking software solutions, assisting in backend integration and user interface components for internal enterprise systems.",
    logo: "/logos/vakifbank.png",
    companyUrl: "https://www.vakifbank.com.tr/",
    stack: ["C#", ".NET", "JavaScript", "MSSQL"],
  },
  {
    role: "Software Development Specialist (Part-Time)",
    company: "Softtech",
    period: "Jun 2019 – Nov 2019",
    description:
      "Implemented automated testing frameworks and procedures, increasing test coverage and improving core system reliability across enterprise modules.",
    logo: "/logos/softtech_logo.jpeg",
    companyUrl: "https://softtech.com.tr/",
    stack: ["Java", "Selenium", "Cucumber"],
  },
  {
    role: "Full Stack Developer (Part-Time)",
    company: "Webbilir Consulting",
    period: "Jul 2018 – Jun 2019",
    description:
      "Built and launched web applications and custom software solutions for client consulting projects, translating business requirements directly into functional code.",
    logo: "/logos/webbilir_logo.jpeg",
    companyUrl: "https://webbilir.com/",
    stack: ["Angular", "JavaScript", "C#", ".NET", "Firebase"],
  },
];