"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setAnimating(true);

    // Wait for animation before changing theme
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
    }, 120);
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="
          relative group overflow-hidden rounded-xl p-3 text-foreground/70
          hover:text-foreground hover:bg-foreground/5 transition z-50
        "
      >
        {/* Slide highlight */}
        <AnimatePresence>
          {animating && (
            <motion.span
              key="slide-highlight"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                pointer-events-none absolute top-0 h-full w-10
                bg-gradient-to-r from-transparent via-foreground/25 to-transparent
              "
              onAnimationComplete={() => setAnimating(false)}
            />
          )}
        </AnimatePresence>

        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span
          className="
            pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2
            whitespace-nowrap rounded-md bg-foreground text-background
            px-2 py-1 text-xs font-medium
            opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
            transition-all
          "
        >
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </span>
      </button>

      {/* No global overlay */}
    </>
  );
}
