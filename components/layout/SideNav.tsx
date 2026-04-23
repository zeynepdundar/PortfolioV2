"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
 
const projectIcon = "/icons/projectIcon.svg";

const aboutIcon = "/icons/userIcon.svg";

const contactIcon = "/icons/emailIcon.svg";

const NAV_ITEMS = [
  { label: "Projects", href: "/projects", icon: projectIcon },
  { label: "About", href: "/about", icon: aboutIcon },
  { label: "Contact", href: "/contact", icon: contactIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="
        hidden md:flex
        fixed right-6 top-20
        z-50
        flex-col items-center gap-4
      "
    >
      <span className="mb-2 h-16 w-px bg-foreground/10" />

      {NAV_ITEMS.map(({ label, href, icon }) => {
        const isActive = mounted && pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`
              relative group
              rounded-xl p-3
              text-foreground/70
              hover:text-foreground
              hover:bg-foreground/5
              transition
              ${isActive ? "text-foreground bg-gradient-to-br from-rose-200/40 via-sky-200/40 to-amber-200/40" : ""}
            `}
          >
            <Image src={icon} alt="" width={20} height={20} aria-hidden="true" />

            {/* Tooltip */}
            <span
              className="
                pointer-events-none
                absolute right-full mr-3
                top-1/2 -translate-y-1/2
                whitespace-nowrap
                rounded-md bg-foreground text-background
                px-2 py-1 text-xs font-medium
                opacity-0 translate-x-1
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all
              "
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
