"use client";

import Brand from "./Brand";
import SideNav from "./SideNav";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { CONTENT_WIDTH } from "../ui/SectionContainer";

const glass =
  "relative inline-flex items-center border border-white/50 bg-white/35 dark:border-white/10 dark:bg-black/30 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition-colors duration-300 hover:bg-white/45 dark:hover:bg-black/40";

export default function TopBar() {
  const show = useScrollDirection();

  return (
    <div className="fixed left-0 right-0 top-6 z-50">
      <div
        className={`${CONTENT_WIDTH} flex items-center justify-between transition-all duration-300 ease-out ${
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-6 opacity-0"
        }`}
      >
        <div className={`${glass} shrink-0 rounded-2xl px-3 py-1.5`}>
          <Brand />
        </div>

        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <div className={`${glass} rounded-full px-1.5 py-2 sm:px-4`}>
            <SideNav />
          </div>

          {/* Theme toggle — visible on mobile, where the side rail is hidden */}
          <div className={`${glass} rounded-full px-0.5 md:hidden`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
