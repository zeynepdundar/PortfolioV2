"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Standard next-themes mount guard to avoid hydration mismatch.
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return (
      <button
        aria-hidden
        tabIndex={-1}
        className="relative rounded-xl p-3 text-foreground/70 opacity-0 pointer-events-none"
      >
        <span className="block h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = async () => {
    const next = isDark ? "light" : "dark";
    const doc = document as ViewTransitionDocument;
    const btn = buttonRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback: no View Transitions support or reduced motion.
    if (!doc.startViewTransition || !btn || reduce) {
      setTheme(next);
      return;
    }

    // Circle origin = centre of the toggle button.
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    try {
      await transition.ready;
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch {
      // Animation is non-critical; theme has already switched.
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative rounded-xl p-3 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span
        className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
      >
        {isDark ? "Switch to Light" : "Switch to Dark"}
      </span>
    </button>
  );
}
