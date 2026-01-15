import { Github, LinkedinIcon, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 border-r border-border bg-surface/80 backdrop-blur">
      <nav className="flex h-full flex-col px-6 py-8">
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
        <ul className="mb-6 flex items-center gap-4 text-muted">
          <li>
            <a
              href="https://www.linkedin.com/in/zeynep-dundar/"
              aria-label="LinkedIn"
              className="rounded-md p-2 hover:bg-primary/10 hover:text-primary transition"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/zeynepdndr"
              aria-label="GitHub"
              className="rounded-md p-2 hover:bg-primary/10 hover:text-primary transition"
            >
              <Github className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="mailto:dundarzey@gmail.com"
              aria-label="Email"
              className="rounded-md p-2 hover:bg-primary/10 hover:text-primary transition"
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
