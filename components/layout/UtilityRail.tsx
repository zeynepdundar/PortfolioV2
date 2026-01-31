"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";

const socials = [
  {
    href: "https://github.com/zeynepdundar",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/zeynep-dundar/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "/cv.pdf",
    label: "Download CV",
    icon: FileText,
  },
];

export default function UtilityRail() {
  return (
    <aside
      className="
        hidden md:flex
        fixed left-6 bottom-[calc(var(--bottom-nav-height)+2rem)]
        z-50
        flex-col items-center gap-4
      "
    >
      {socials.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            relative group
            rounded-xl p-3
            text-foreground/70
            hover:text-foreground
            hover:bg-foreground/5
            transition
          "
        >
          <Icon className="h-5 w-5" />

          {/* Tooltip */}
          <span
            className="
              pointer-events-none
              absolute left-full ml-3
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
      ))}

      <ThemeToggle />

      <span className="mt-2 h-16 w-px bg-foreground/10" />
    </aside>
  );
}

