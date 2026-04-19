// Skills section intentionally omitted from the portfolio.

import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionContainer } from "../../ui/SectionContainer";

const skills = [
  {
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    logo: "/logos/technologies/html-logo.png",
    description: "Markup Language",
  },
  {
    name: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    logo: "/logos/technologies/css-logo.png",
    description: "Styling Language",
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: "/logos/technologies/javascript-logo.png",
    description: "Programming Language",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    logo: "/logos/technologies/typescript-logo.png",
    description: "Typed JavaScript",
  },
  {
    name: "React",
    href: "https://react.dev/",
    logo: "/logos/technologies/react-logo.png",
    description: "UI Library",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    logo: "/logos/technologies/nextjs-logo.png",
    description: "React Framework",
  },
  {
    name: "Redux",
    href: "https://redux.js.org/",
    logo: "/logos/technologies/redux-logo.png",
    description: "State Management",
  },
  {
    name: "Angular",
    href: "https://angular.dev/",
    logo: "/logos/technologies/angular-logo.png",
    description: "Frontend Framework",
  },
  {
    name: "RxJs",
    href: "https://rxjs.dev/",
    logo: "/logos/technologies/rxjs-logo.png",
    description: "Reactive Programming",
  },
  {
    name: "React Native",
    href: "https://reactnative.dev/",
    logo: "/logos/technologies/react-logo.png",
    description: "Mobile Framework",
  },
  {
    name: "Storybook",
    href: "https://storybook.js.org/",
    logo: "/logos/technologies/storybook-logo.png",
    description: "UI Component Dev",
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    logo: "/logos/technologies/figma-logo.png",
    description: "Design Tool",
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    logo: "/logos/technologies/firebase-logo.png",
    description: "Backend Services",
  },
  {
    name: "Electron.js",
    href: "https://www.electronjs.org/",
    logo: "/logos/technologies/electronjs-logo.png",
    description: "Desktop Apps",
  },
];

const Skills = () => {
  return (
    <PageSection id="skills">
      <SectionContainer>
        <div className="w-full">
          <SectionHeader
            title="Skills"
            subtitle="Technologies and tools I use regularly"
          />

          <div className="mt-6 h-6" aria-hidden />

          <div className="mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full h-16 rounded-lg border border-border/20 bg-muted/10 px-3 hover:bg-muted/30 transition"
              >
                <div className="relative h-7 w-7 shrink-0 opacity-75">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="block text-sm font-light text-foreground/80">
                    {skill.name}
                  </span>
                  <span className="block text-[10px] tracking-wide text-muted-foreground/40 uppercase">
                    {skill.description}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
};

export default Skills;
