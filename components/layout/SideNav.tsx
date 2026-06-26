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
    <nav className="flex items-center gap-1">
      {NAV_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
  className={`
    relative px-3 py-1.5 text-sm font-medium
    rounded-full transition-all duration-300

    text-foreground/70 hover:text-foreground
    hover:bg-white/10 hover:-translate-y-[1px]
    hover:shadow-[0_6px_18px_-10px_rgba(0,0,0,0.25)]

    ${isActive ? "bg-white/15 text-foreground shadow-sm" : ""}
  `}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}