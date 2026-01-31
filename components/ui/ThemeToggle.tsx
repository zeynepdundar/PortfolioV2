"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="
        relative group
        rounded-xl p-3
        text-foreground/70
        hover:text-foreground
        hover:bg-foreground/5
        transition
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}

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
        {isDark ? "Switch to Light" : "Switch to Dark"}
      </span>
    </button>
  );
}
