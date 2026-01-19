"use client";
import { useEffect, useState } from "react";
import { Github, LinkedinIcon, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 relative border-r border-border backdrop-blur">
      {/* Divider layers */}
      <span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-border" />
      <span className="pointer-events-none absolute right-[1px] top-0 h-full w-px bg-white/40" />
      <span className="pointer-events-none absolute right-[-1px] top-0 h-full w-px bg-foreground/5" />

      <nav className="flex h-full flex-col px-6 py-8">
        {/* Brand */}
        <a
          href="#about"
          className="mb-12 text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Zeynep Dundar
        </a>

        {/* Navigation */}
        <ul className="flex flex-col gap-1 text-sm">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`
                    flex items-center rounded-lg px-3 py-2
                    transition-all duration-200
                    ${
                      isActive
                        ? "text-primary translate-x-1 font-medium"
                        : "text-muted hover:text-primary"
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Socials */}
        <ul className="mb-6 flex items-center justify-center gap-8 text-muted">
          <li>
            <a
              href="https://www.linkedin.com/in/zeynep-dundar/"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/zeynepdndr"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="mailto:dundarzey@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="
            inline-flex items-center justify-center rounded-lg
            bg-primary px-4 py-2 text-sm font-medium text-white
            hover:bg-primary-hover transition-colors
          "
        >
          Resume
        </a>
      </nav>
    </aside>
  );
}
