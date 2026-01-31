"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

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
    label: "CV",
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
            group
            rounded-xl p-3
            text-foreground/70
            hover:text-foreground
            hover:bg-foreground/5
            transition
          "
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}

      {/* vertical line */}
      <span className="mt-2 h-16 w-px bg-foreground/10" />
    </aside>
  );
}
