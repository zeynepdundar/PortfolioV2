"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navRef = useRef<HTMLUListElement | null>(null);

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

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------
   * Scroll helpers
   * ----------------------------------------- */
  const updateScrollState = () => {
    const el = navRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    navRef.current?.scrollBy({ left: -160, behavior: "smooth" });
  };

  const scrollRight = () => {
    navRef.current?.scrollBy({ left: 160, behavior: "smooth" });
  };

  /* -------------------------------------------
   * Auto-center active item
   * ----------------------------------------- */
  useEffect(() => {
    const el = navRef.current;
    const activeEl = el?.querySelector(
      `[data-id="${activeSection}"]`
    ) as HTMLElement | null;

    if (el && activeEl) {
      const offset =
        activeEl.offsetLeft -
        el.clientWidth / 2 +
        activeEl.clientWidth / 2;

      el.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [activeSection]);

  /* -------------------------------------------
   * Init + listen scroll
   * ----------------------------------------- */
  useEffect(() => {
    updateScrollState();
    navRef.current?.addEventListener("scroll", updateScrollState);

    return () =>
      navRef.current?.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <nav
      className="
        fixed left-0 right-0 z-50
        bottom-6
        pb-[env(safe-area-inset-bottom)]
      "
    >
      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          aria-label="Scroll left"
          onClick={scrollLeft}
          className="
    absolute left-3 top-1/2 -translate-y-1/2
    sm:hidden
    w-4 h-4
    pointer-events-auto
    -rotate-90
  "
        >
          <span
            aria-hidden
            className="
      relative block w-full h-full

      before:content-['']
      before:absolute before:left-1/2 before:top-0
      before:h-full before:w-px
      before:bg-foreground/40
      before:rotate-45
      before:origin-top

      after:content-['']
      after:absolute after:left-1/2 after:top-0
      after:h-full after:w-px
      after:bg-foreground/40
      after:rotate-[-45deg]
      after:origin-top
    "
          />
        </button>

      )}

      {/* NAV LIST */}
      <ul
        ref={navRef}
        className="
    mx-auto
    flex
    max-w-[calc(100vw-4.5rem)]
    sm:max-w-4xl

    items-center
    gap-6
    px-6 sm:px-12

    overflow-x-auto
    whitespace-nowrap
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden

    sm:overflow-visible
    sm:justify-between
  "
      >
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = activeSection === id;

          return (
            <li
              key={id}
              data-id={id}
              className="relative shrink-0"
            >
              {/* Antique top indicator */}
              <span
                aria-hidden
                className={`
                  absolute left-1/2 -top-2
                  h-0.5 w-11 -translate-x-1/2
                  bg-foreground/70
                  rounded-sm
                  transition-all duration-300
                  ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                `}
              />

              <a
                href={`#${id}`}
                className={`
                  block
                  font-medium
                  transition-all duration-200
                  text-sm sm:text-base
                  ${isActive
                    ? "text-primary -translate-y-0.5"
                    : "text-foreground/70 hover:text-foreground"
                  }
                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
  aria-label="Scroll right"
  onClick={scrollRight}
  className="
    absolute right-3 top-1/2 -translate-y-1/2
    sm:hidden
    w-4 h-4
    pointer-events-auto
    rotate-90
  "
>
  <span
    aria-hidden
    className="
      relative block w-full h-full

      before:content-['']
      before:absolute before:left-1/2 before:top-0
      before:h-full before:w-px
      before:bg-foreground/40
      before:rotate-45
      before:origin-top

      after:content-['']
      after:absolute after:left-1/2 after:top-0
      after:h-full after:w-px
      after:bg-foreground/40
      after:rotate-[-45deg]
      after:origin-top
    "
  />
</button>

      )}
    </nav>
  );
}
