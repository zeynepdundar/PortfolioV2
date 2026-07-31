"use client";

import { useState } from "react";
import Image from "next/image";
import { type Experience } from "@/data/experiences";

type Props = {
  experiences: Experience[];
};

export function ExperienceTabs({ experiences }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
      {/* LEFT — Tabs */}
      <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-border/20 overflow-x-auto no-scrollbar">
        {experiences.map((exp, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`${exp.company}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative text-left px-4 py-2.5 text-sm whitespace-nowrap md:whitespace-normal transition-colors duration-200
                ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
            >
              {/* Active indicator (Left on desktop, Bottom on mobile) */}
              {isActive && (
                <>
                  <span className="hidden md:block absolute left-0 top-0 h-full w-[2px] bg-foreground" />
                  <span className="md:hidden absolute left-0 bottom-0 w-full h-[2px] bg-foreground" />
                </>
              )}
              {exp.company}
            </button>
          );
        })}
      </div>

      {/* RIGHT — Content */}
      <div
        key={active.company}
        className="flex flex-col gap-4 animate-in fade-in duration-300 min-h-[260px]"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <a
            href={active.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${active.company} website`}
            className="group"
          >
            <div className="relative h-12 w-12 overflow-hidden flex items-center justify-center rounded-lg border border-border/40 bg-background/80 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={active.logo}
                alt={active.company}
                fill
                className="object-contain p-2"
                sizes="48px"
              />
            </div>
          </a>

          <div>
            <h3 className="text-lg font-medium text-foreground">
              {active.role}
            </h3>
            <p className="text-sm text-foreground/60">{active.company}</p>
          </div>
        </div>

        <span className="text-xs font-mono text-foreground/50">
          {active.period}
        </span>

        <p className="text-foreground/75 text-base leading-relaxed max-w-xl">
          {active.description}
        </p>

        {/* 🔗 Project link */}
        {active.link?.href && (
          <div className="mt-1">
            <a
              href={active.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <span>{active.link.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 text-foreground/60">
                ↗
              </span>
            </a>
          </div>
        )}

        {/* Tech Stack Pills */}
        {active.stack?.length ? (
          <ul className="flex flex-wrap gap-2 mt-3">
            {active.stack.map((tech) => (
              <li
                key={tech}
                className="text-xs px-2.5 py-1 border border-border/30 rounded-md bg-foreground/[0.02] text-foreground/70 font-mono"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}