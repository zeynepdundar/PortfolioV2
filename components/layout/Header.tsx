import { Github, LinkedinIcon, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-semibold text-foreground hover:text-primary transition-colors"
        >
          Zeynep Dundar
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a
                href="#about"
                className="text-muted hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-muted hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-muted hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/zeynepdndr"
              aria-label="GitHub"
              className="text-muted hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/zeynep-dundar/"
              aria-label="LinkedIn"
              className="text-muted hover:text-primary transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:dundarzey@gmail.com"
              aria-label="Email"
              className="text-muted hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
