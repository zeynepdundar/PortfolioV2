"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Home, Mail, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Intro", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="
        hidden md:flex
        fixed right-6 top-20
        z-50
        flex-col items-center gap-4
      "
    >
      <span className="mb-2 h-16 w-px bg-foreground/10" />

      {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`
              relative group
              rounded-xl p-3
              text-foreground/70
              hover:text-foreground
              hover:bg-foreground/5
              transition
              ${isActive ? "text-foreground bg-gradient-to-br from-rose-200/40 via-sky-200/40 to-amber-200/40" : ""}
            `}
          >
            <Icon className="h-5 w-5" />

            {/* Tooltip */}
            <span
              className="
                pointer-events-none
                absolute right-full mr-3
                top-1/2 -translate-y-1/2
                whitespace-nowrap
                rounded-md bg-foreground text-background
                px-2 py-1 text-xs font-medium
                opacity-0 translate-x-1
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all
              "
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
