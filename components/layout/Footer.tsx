// components/layout/Footer.tsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Name */}
        <h2 className="text-center text-sm font-medium tracking-wide">
          Zeynep Dundar · <span className="text-salmon">Frontend Engineer</span>
        </h2>

        {/* Socials */}
        <ul className="mt-6 flex justify-center gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/zeynep-dundar/"
              target="_blank"
              aria-label="LinkedIn"
              className="footer-icon"
            >
            </a>
          </li>

          <li>
            <a
              href="https://github.com/zeynepdndr"
              target="_blank"
              aria-label="GitHub"
              className="footer-icon"
            >
            </a>
          </li>

          <li>
            <a
              href="mailto:dundarzey@gmail.com"
              aria-label="Email"
              className="footer-icon"
            >
            </a>
          </li>
        </ul>

        {/* Scroll to top */}
        <div className="mt-8 flex justify-center">
          <button
          //  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-salmon transition"
          >
          </button>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-text-muted">
          © {year} Zeynep Dundar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
