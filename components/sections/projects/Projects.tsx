"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { projects, type Project, type ProjectMediaItem } from "@/data/projects";

/* ------------------------------------------------------------------ */
/* Media                                                              */
/* ------------------------------------------------------------------ */

function renderMedia(item: ProjectMediaItem, priority = false) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover object-top"
      />
    );
  }
  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 620px"
      className="object-cover object-top"
    />
  );
}

/** Theme-aware inline marks for confidential / NDA work (no screenshot). */
const BRAND_MARKS: Record<string, React.ReactNode> = {
  mercedes: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="44" strokeWidth="4" />
      <g strokeWidth="5" strokeLinecap="round">
        <line x1="50" y1="50" x2="50" y2="8" />
        <line x1="50" y1="50" x2="13.6" y2="71" />
        <line x1="50" y1="50" x2="86.4" y2="71" />
      </g>
    </svg>
  ),
  oraxai: (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full" aria-hidden>
      <circle cx="47" cy="53" r="30" stroke="currentColor" strokeWidth="8" />
      <circle cx="78" cy="26" r="9" style={{ fill: "var(--primary)" }} />
    </svg>
  ),
};

function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.display === "brand") {
    const brand = project.brand;
    const mark = brand?.mark ? BRAND_MARKS[brand.mark] : null;
    const markSize =
      brand?.mark === "oraxai"
        ? "h-8 w-8 sm:h-10 sm:w-10"
        : "h-20 w-20 sm:h-24 sm:w-24";
    return (
      <div
        className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-foreground/[0.05] via-foreground/[0.02] to-foreground/[0.06]"
        style={brand?.accent ? { background: brand.accent } : undefined}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        {brand?.logo ? (
          <div className="relative h-16 w-52">
            <Image src={brand.logo} alt={project.title} fill priority={priority} className="object-contain" />
          </div>
        ) : mark ? (
          <div className={`text-foreground/85 ${markSize}`}>{mark}</div>
        ) : (
          <span className="text-3xl font-light tracking-tight text-foreground/90 sm:text-4xl">
            {brand?.wordmark ?? project.title}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/40 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
      {renderMedia(project.media[0], priority)}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Featured row — big visual + minimal text (b-berger inspired)        */
/* ------------------------------------------------------------------ */

function FeaturedRow({ project, index }: { project: Project; index: number }) {
  const mediaLeft = index % 2 === 1;
  const period = project.eyebrow;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div className={mediaLeft ? "lg:order-1" : "lg:order-2"}>
        <ProjectVisual project={project} priority={index === 0} />
      </div>

      <div className={mediaLeft ? "lg:order-2" : "lg:order-1"}>
        <header className="flex flex-col gap-4">
          {period && (
            <p className="text-sm font-normal leading-5 text-foreground/60">
              {period}
            </p>
          )}

          <div className="space-y-1">
            <h3 className="text-xl font-normal leading-tight tracking-tight text-foreground sm:text-2xl">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm font-normal leading-6 text-foreground/65">
                {project.subtitle}
              </p>
            )}
          </div>
        </header>

        <p className="mt-6 max-w-md text-base font-normal leading-7 text-foreground/75">
          {project.summary[0]}
        </p>

        {/* Dynamic Project Links */}
        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {project.links.map((link) => {
              const cleanLabel = link.label.replace(/[→↗]/g, "").trim();
              const isInternal = link.href.startsWith("/");

              if (isInternal) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                  >
                    {cleanLabel}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground"
                >
                  {cleanLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Experiments — small, quiet list                                    */
/* ------------------------------------------------------------------ */

function ExperimentItem({ project }: { project: Project }) {
  const primaryHref = project.links[0]?.href ?? "#";
  return (
    <a
      href={primaryHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/30">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          {renderMedia(project.media[0])}
        </div>
      </div>
      <h4 className="mt-4 text-base font-normal tracking-tight text-foreground/90 group-hover:text-foreground">
        {project.title}
      </h4>
      <p className="mt-1 text-sm leading-relaxed text-foreground/70">
        {project.summary[0]}
      </p>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const featured = projects.filter((p) => p.category === "Product & Systems");
  const experiments = projects.filter((p) => p.category === "Experiments");

  return (
    <PageSection id="projects">
      <div className="w-full overflow-hidden">
        <SectionContainer>
          <SectionHeader
            title="Featured Work"
            subtitle="Enterprise platforms, independent products, and experiments I've built along the way."
          />

          <div className="mt-16 space-y-24 sm:space-y-32">
            {featured.map((project, idx) => (
              <FeaturedRow key={project.title} project={project} index={idx} />
            ))}
          </div>

          {experiments.length > 0 && (
            <div className="mt-32">
              <div className="mb-10 flex items-center gap-4">
                <span className="text-meta">Experiments</span>
                <span className="h-px flex-1 bg-border/50" />
              </div>
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {experiments.map((project) => (
                  <ExperimentItem key={project.title} project={project} />
                ))}
              </div>
            </div>
          )}
        </SectionContainer>
      </div>
    </PageSection>
  );
}