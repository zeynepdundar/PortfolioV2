"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["500"],
});

export default function Brand() {
    const show = useScrollDirection();

    return (
<div className="fixed top-6 left-0 right-0 z-50">
  <div className="mx-auto w-full max-w-6xl px-4">
    <Link
      href="/"
      className={`
        group inline-flex items-center
        transition-all duration-300 ease-in-out

        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      <img
        src="/images/logo-zd2.svg"
        alt="ZD Logo"
        className="
          h-6 w-auto
          transition-all duration-300 ease-in-out
          group-hover:opacity-80
          group-hover:scale-[1.05]
        "
      />
    </Link>
  </div>
</div>
    );
}