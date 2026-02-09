"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Projects", emoji: "✨", id: "projects" },
  { label: "About", emoji: "🌷", id: "about" },
  { label: "Contact", emoji: "🌈", id: "contact" },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  /* -------------------------------------------
   * Intersection Observer (section tracking)
   * ----------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const introEl = document.getElementById("intro");
    if (introEl) observer.observe(introEl);

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="
        hidden md:flex
        fixed right-4 top-10
        z-50
        flex-col items-start gap-1
      "
    >

      {NAV_ITEMS.map(({ label, emoji, id }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`
              relative group
              rounded-lg px-1 py-1 text-left
              text-xs font-medium
              transition
              ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"}
            `}
          >
            <span className="mr-1 inline-block text-[13px]">
              {emoji}
            </span>
            {label}
          </a>
        );
      })}
    </nav>
  );
}
