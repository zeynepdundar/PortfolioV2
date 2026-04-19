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
                    className={`,
                        ${playfair.className}
    group inline-flex items-center
    text-base font-medium tracking-tight
    text-foreground/90

    transition-all duration-300 ease-in-out

    hover:text-[var(--primary)]

    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
  `}
                >
                    Zeynep Dündar

                </Link>
            </div>
        </div>
    );
}