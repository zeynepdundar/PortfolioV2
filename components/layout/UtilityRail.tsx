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
    href: "/docs/cv.pdf",
    label: "Download CV",
    icon: FileText,
  },
];

export default function UtilityRail() {
  return (
    <aside
      className="
        hidden md:flex
        fixed left-6 bottom-8
        z-40
        flex-col items-center gap-3
        text-foreground/60
      "
    >
      {/* Rail background (subtle glass, optional but cleaner) */}
<div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl px-2 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">        {socials.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group relative
              p-2
              rounded-lg
              text-foreground/60
              hover:text-foreground
              hover:bg-foreground/5
              transition
            "
          >
            <Icon className="h-4 w-4" />

            {/* Tooltip (desktop only effect) */}
            <span
              className="
                pointer-events-none
                absolute left-full ml-2
                top-1/2 -translate-y-1/2
                whitespace-nowrap
                rounded-md
                bg-foreground text-background
                px-2 py-1 text-[10px] font-medium
                opacity-0 translate-x-1
                group-hover:opacity-100 group-hover:translate-x-0
                transition
              "
            >
              {label}
            </span>
          </Link>
        ))}

        {/* Theme toggle (slightly separated but still subtle) */}
        <div className="pt-2 mt-1 border-t border-foreground/15">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}