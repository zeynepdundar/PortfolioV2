// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-lg font-semibold tracking-tight text-white">
              Zeynep Dundar
            </span>

            {/* SVG underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity"
              viewBox="0 0 600 200"
            >
              <path
                d="M556 127C526 106 425 98 266 119 146 135 49 130 7 114"
                stroke="#B4ADFF"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>

            {/* Icons */}


            {/* Resume */}
            <li>
              <a
                href="https://www.dropbox.com/scl/fi/an645if7qygouha4cxkai/Zeynep-Dundar-Resume.pdf"
                target="_blank"
                className="bg-primary hover:bg-primary-hover text-white"
              >
                Resume
              </a>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
