"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-0.5 sm:gap-2">
      {NAV_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`group relative px-2.5 py-1.5 text-sm sm:px-3 font-medium transition-colors duration-300 ${
              isActive
                ? "text-foreground"
                : "text-foreground/80 hover:text-[var(--accent,#955568)]"
            }`}
          >
            {label}
            {/* Accent underline — persistent when active, slides in on hover */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-0.5 left-2.5 right-2.5 h-[2px] sm:left-3 sm:right-3 origin-left rounded-full bg-[var(--accent,#955568)] transition-transform duration-300 ease-out ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
