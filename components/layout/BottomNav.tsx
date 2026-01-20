"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("about");

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

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
    fixed left-0 right-0 z-50
    bottom-6
    pb-[env(safe-area-inset-bottom)]
  "
    >
<ul
  className="
    mx-auto
    flex max-w-4xl items-center
    justify-around sm:justify-between
    px-4 sm:px-8
  "
>
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = activeSection === id;

          return (
            <li key={id} className="relative">
<a
  href={`#${id}`}
  className={`
    font-medium
    transition-all duration-200

    text-sm tracking-normal
    sm:text-base sm:tracking-wide

    ${
      isActive
        ? "text-primary -translate-y-0.5"
        : "text-foreground/70 hover:text-foreground"
    }
  `}
>

                {label}

                {/* active dot */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

