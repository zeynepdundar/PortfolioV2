"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Brand() {
  const show = useScrollDirection();

  return (
<div className="px-3 py-1.5 rounded-2xl flex items-center bg-white/5 dark:bg-black/20 backdrop-blur-2xl border border-white/10">      <Link
        href="/"
        className="flex items-center transition hover:opacity-80"
      >
        <img
          src="/images/logo-zd2.svg"
          alt="ZD Logo"
          className="h-5 w-auto"
        />
      </Link>
    </div>

  );
}