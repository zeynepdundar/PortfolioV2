import { Github, LinkedinIcon, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 relative border-r border-border backdrop-blur">
      {/* Structural divider */}
      <span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-border" />

      {/* Light edge highlight */}
      <span className="pointer-events-none absolute right-[1px] top-0 h-full w-px bg-white/40" />

      {/* Shadow falloff */}
      <span className="pointer-events-none absolute right-[-1px] top-0 h-full w-px bg-foreground/5" />

      <nav className="flex h-full flex-col px-6 py-8 ">
        {/* Brand */}
        <a
          href="#"
          className="mb-12 text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Zeynep Dundar
        </a>

        {/* Navigation */}
        <ul className="flex flex-col gap-1 text-sm">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="
                  group flex items-center rounded-lg px-3 py-2
                  text-muted transition
                  hover:bg-primary/10 hover:text-primary
                "
              >
                <span className="relative">
                  {label}
                  <span
                    className="
                      absolute -bottom-1 left-0 h-px w-0 bg-primary
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Socials */}
        <ul className="mb-6 flex items-center justify-center gap-8 text-muted">
          <a
            href="https://www.linkedin.com/in/zeynep-dundar/"
            aria-label="LinkedIn"
            className="transition-colors duration-200  hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>

          <li>
            <a
              href="https://github.com/zeynepdndr"
              aria-label="GitHub"
              className="rounded-md p-2 transition-colors duration-200  hover:text-primary "
            >
              <Github className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="mailto:dundarzey@gmail.com"
              aria-label="Email"
              className="rounded-md p-2 transition-colors duration-200  hover:text-primary"
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
