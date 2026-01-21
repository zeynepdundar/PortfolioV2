import Image from "next/image";

import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";

const skills = [
  { name: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: "/logos/technologies/html-logo.png", description: "Markup Language" },
  { name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: "/logos/technologies/css-logo.png", description: "Styling Language" },
  { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: "/logos/technologies/javascript-logo.png", description: "Programming Language" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/", logo: "/logos/technologies/typescript-logo.png", description: "Typed JavaScript" },
  { name: "React", href: "https://react.dev/", logo: "/logos/technologies/react-logo.png", description: "UI Library" },
  { name: "Next.js", href: "https://nextjs.org/", logo: "/logos/technologies/nextjs-logo.png", description: "React Framework" },
  { name: "Redux", href: "https://redux.js.org/", logo: "/logos/technologies/redux-logo.png", description: "State Management" },
  { name: "Angular", href: "https://angular.dev/", logo: "/logos/technologies/angular-logo.png", description: "Frontend Framework" },
  { name: "RxJs", href: "https://rxjs.dev/", logo: "/logos/technologies/rxjs-logo.png", description: "Reactive Programming" },
  { name: "React Native", href: "https://reactnative.dev/", logo: "/logos/technologies/react-logo.png", description: "Mobile Framework" },
  { name: "Storybook", href: "https://storybook.js.org/", logo: "/logos/technologies/storybook-logo.png", description: "UI Component Dev" },
  { name: "Figma", href: "https://www.figma.com/", logo: "/logos/technologies/figma-logo.png", description: "Design Tool" },
  { name: "Firebase", href: "https://firebase.google.com/", logo: "/logos/technologies/firebase-logo.png", description: "Backend Services" },
  { name: "Electron.js", href: "https://www.electronjs.org/", logo: "/logos/technologies/electronjs-logo.png", description: "Desktop Apps" },
];

const Skills = () => {
  return (
    <PageSection id="skills">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeader
            title="Skills"
            subtitle="Technologies and tools I use regularly"
          />

          <p className="mt-6 text-md leading-relaxed text-muted">
            Here are some of the technologies and tools I have experience with, ranging from frontend and backend development to design and mobile frameworks.
          </p>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-7 gap-6">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-18 h-18 rounded-xl border border-border bg-background/50 p-2 hover:bg-border transition-all group flex items-center justify-center"
              >
                {/* Skill Logo */}
                <Image
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:-translate-y-1 p-4"
                />

                {/* Hover Popup */}
                <div className="absolute bottom-[calc(100%+4px)] w-max pointer-events-none z-10 text-center pt-1 pb-1 px-2 bg-[#0C0C0CD1] backdrop-blur-md rounded-md transition-all duration-700 scale-0 opacity-0 blur-[4px] translate-y-4 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:blur-0">
                  <div className="font-serif mb-1 text-xs text-white">{skill.name}</div>
                  <div className="font-mono text-[10px] text-neutral-300 uppercase">{skill.description}</div>
                </div>
              </a>
            ))}
          </div>
          {/* End Skills Grid */}

        </div>
      </div>
    </PageSection>
  );
};

export default Skills;
