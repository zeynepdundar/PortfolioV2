"use client";

import { useState } from "react";
import Image from "next/image";
import { type Experience } from "@/data/experiences";

type Props = {
  experiences: Experience[];
};

/** Highlights if given, otherwise the description split into sentences. */
function getHighlights(exp: Experience) {
  if (exp.highlights?.length) return exp.highlights;
  return exp.description
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function ExperienceTabs({ experiences }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];
  const isCurrent = /present/i.test(active.period);
  const period = active.period.replace(/\s*[–-]\s*/, " — ");

  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-10">
      {/* LEFT — Tabs */}
      <div
        role="tablist"
        aria-label="Work experience"
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-foreground/10 pb-2 md:flex-col md:self-start md:border-b-0 md:border-r md:pb-0 md:pr-6"
      >
        {experiences.map((exp, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`${exp.company}-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={`relative whitespace-nowrap rounded-md px-4 py-3 text-left text-body transition-colors duration-200 md:whitespace-normal
                ${
                  isActive
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-foreground/70 hover:bg-foreground/[0.03] hover:text-foreground"
                }`}
            >
              {/* Active indicator (left on desktop, bottom on mobile) */}
              {isActive && (
                <>
                  <span className="absolute inset-y-0 left-0 hidden w-[3px] rounded-l-md bg-accent md:block" />
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-accent md:hidden" />
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
        role="tabpanel"
        className="animate-in fade-in flex min-h-[320px] flex-col duration-300"
      >
        {/* Header */}
        <div className="flex items-start gap-5">
          <a
            href={active.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${active.company} website`}
            className="group shrink-0"
          >
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={active.logo}
                alt={active.company}
                fill
                className="object-contain p-3"
                sizes="64px"
              />
            </div>
          </a>

          <div className="min-w-0">
            <h3 className="text-title font-medium text-foreground">{active.role}</h3>
            <p className="text-body-lg text-foreground/60">{active.company}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/60">
              <span>{period}</span>
              {isCurrent && (
                <>
                  <span aria-hidden="true" className="size-1 rounded-full bg-foreground/50" />
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-accent">
                    Current role
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-foreground/10" />

        {/* Highlights */}
        <ul className="max-w-2xl space-y-4 text-body-lg text-foreground/75">
          {getHighlights(active).map((item) => (
            <li key={item} className="flex gap-4">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Project link */}
        {active.link?.href && (
          <div className="mt-5">
            <a
              href={active.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link group"
            >
              <span>{active.link.label}</span>
              <span className="text-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        )}

        {/* Technologies */}
        {active.stack?.length ? (
          <div className="mt-8">
            <span className="text-meta">Technologies</span>
            <ul className="mt-4 flex flex-wrap gap-3">
              {active.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-foreground/15 bg-background/60 px-4 py-2 text-sm text-foreground/75"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
