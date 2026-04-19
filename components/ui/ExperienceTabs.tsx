"use client";

import { useState } from "react";
import Image from "next/image";
import { Experience } from "@/data/experiences";

type Props = {
  experiences: Experience[];
};

export function ExperienceTabs({ experiences }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">

      {/* LEFT — Tabs */}
      <div className="flex md:flex-col border-l border-border/20">
  {experiences.map((exp, index) => (
    <button
      key={`${exp.company}-${index}`}
      onClick={() => setActiveIndex(index)}
      className={`relative text-left pl-4 pr-3 py-2 text-sm transition
        ${
          index === activeIndex
            ? "text-foreground"
            : "text-muted hover:text-foreground/80"
        }`}
    >
      {/* Active indicator */}
      {index === activeIndex && (
        <span className="absolute left-0 top-0 h-full w-[2px] bg-foreground/80" />
      )}

      {exp.company}
    </button>
  ))}
</div>

      {/* RIGHT — Content */}
      <div
        key={active.company}
        className="flex flex-col gap-4 animate-in fade-in duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <a href={active.companyUrl} target="_blank">
            <div className="h-12 w-12 flex items-center justify-center rounded-md border border-border/20 bg-background/80 shadow-[0_6px_18px_-12px_rgba(0,0,0,0.2)]">
              <Image
                src={active.logo}
                alt={active.company}
                width={32}
                height={32}
              />
            </div>
          </a>

          <div>
            <h3 className="text-lg text-foreground/80">{active.role}</h3>
            <p className="text-sm text-muted">{active.company}</p>
          </div>
        </div>

        <span className="text-xs text-muted/70">
          {active.period}
        </span>

        <p className="text-foreground/60 text-body-lg max-w-xl">
          {active.description}
        </p>

        {/* Optional highlights */}

        {/* 🔗 Project link */}
        {active.link && (
          <a
            href={active.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition group"
          >
            <span>{active.link.label}</span>
            <span className="text-muted/40 group-hover:translate-x-0.5 transition">
              ↗
            </span>
          </a>
        )}

        {/* Stack */}
        <ul className="flex flex-wrap gap-2 mt-2">
          {active.stack.map((tech) => (
            <li
              key={tech}
              className="text-xs px-2 py-1 border border-border/20 rounded-md text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}