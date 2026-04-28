"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center text-center px-6">
      <div className="space-y-4">
        <h1 className="text-display font-bold text-foreground">404</h1>

        <p className="text-body-lg text-muted">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-primary px-6 py-3 text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}