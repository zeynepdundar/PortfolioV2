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
    <nav className="flex items-center gap-2">
      {NAV_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`group relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-foreground"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {label}
            {/* Pink underline — persistent when active, slides in on hover */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-0.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[var(--primary)] transition-transform duration-300 ease-out ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
