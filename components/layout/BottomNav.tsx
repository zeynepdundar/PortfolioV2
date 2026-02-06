"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },

  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
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
        flex-col items-center gap-1
      "
    >

      {NAV_ITEMS.map(({ label, id }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`
              relative group
              rounded-lg px-1 py-1
              text-xs font-medium
              transition
              ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"}
            `}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
