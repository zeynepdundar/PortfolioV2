"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Component,
  FileText,
  Globe,
  Languages,
  Layers,
  MessagesSquare,
  RefreshCw,
  ScanBarcode,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  projects,
  type Project,
  type ProjectFeatureIcon,
  type ProjectMediaItem,
} from "@/data/projects";
import { ProjectLinkIcon } from "@/components/ui/ProjectLinkIcon";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { Button } from "@/components/ui/Button";
import { Subsection } from "@/components/ui/Subsection";

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

/** Desktop app screens layered as overlapping windows, cropped by the frame
 *  so each one is only partly visible. items[0] sits in front. */
const STACK_LAYERS = [
  // front
  "left-[5%] top-[34%] w-[80%] z-30 group-hover:-translate-y-1.5",
  // middle
  "left-[13%] top-[19%] w-[80%] z-20 group-hover:translate-x-2 group-hover:-translate-y-2.5",
  // back
  "left-[21%] top-[5%] w-[80%] z-10 group-hover:translate-x-4 group-hover:-translate-y-3.5",
];

function StackedScreens({
  items,
  priority = false,
}: {
  items: ProjectMediaItem[];
  priority?: boolean;
}) {
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/[0.10] via-foreground/[0.03] to-foreground/[0.07]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 -top-1/3 h-2/3 w-2/3 rounded-full bg-primary/15 blur-3xl"
      />
      {items.map((item, i) => (
        <div
          key={item.src}
          className={`absolute overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_18px_44px_-14px_rgba(15,23,42,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${STACK_LAYERS[i]}`}
        >
          <div className="flex items-center gap-1 border-b border-black/[0.06] bg-[#f6f8fb] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          </div>
          <div className="relative aspect-[2000/1092] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={priority && i === 0}
              sizes="(max-width: 1024px) 85vw, 520px"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

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
            <Image src={brand.logo} alt={brand.wordmark ?? project.title} fill priority={priority} className="object-contain" />
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

  if (project.display === "stack") {
    return <StackedScreens items={project.media.slice(0, 3)} priority={priority} />;
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

const FEATURE_ICONS: Record<ProjectFeatureIcon, LucideIcon> = {
  document: FileText,
  users: Users,
  refresh: RefreshCw,
  layers: Layers,
  scan: ScanBarcode,
  chat: MessagesSquare,
  chart: ChartColumn,
  languages: Languages,
  component: Component,
  globe: Globe,
};

function FeaturedRow({ project, index }: { project: Project; index: number }) {
  const mediaLeft = index % 2 === 1;
  const [galleryOpen, setGalleryOpen] = useState(false);

  const cardLinks = project.links.filter((l) => l.placement !== "detail");
  const caseStudy = cardLinks.find((l) => l.href.startsWith("/"));
  const iconLinks = cardLinks.filter((l) => !l.href.startsWith("/") && l.icon);
  const textLinks = cardLinks.filter((l) => !l.href.startsWith("/") && !l.icon);
  const canExplore = Boolean(caseStudy) || Boolean(project.screens?.length);

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
        <header>
          {project.eyebrow && (
            <p className="text-meta normal-case!">
              {project.eyebrow}
            </p>
          )}

          <h3
            className="text-title mt-3 text-foreground"
            style={{ fontFamily: "var(--font-perfectly-nineties)" }}
          >
            {project.title}
          </h3>

          {project.subtitle && (
            <p
              className="text-body-lg mt-1 text-accent"
              style={{ fontFamily: "var(--font-perfectly-nineties)" }}
            >
              {project.subtitle}
            </p>
          )}
        </header>

        <p className="text-body-lg mt-5 max-w-lg text-foreground/70">
          {project.summary[0]}
        </p>

        {project.features?.length ? (
          <ul className="mt-6 space-y-3">
            {project.features.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <li key={feature.text} className="flex items-center gap-4">
                  <Icon aria-hidden strokeWidth={1.6} className="h-5 w-5 shrink-0 text-foreground/80" />
                  <span className="text-body text-foreground/70">
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : null}

        {project.tags?.length ? (
          <p className="text-body mt-6 text-foreground/50">
            {project.tags.join(" · ")}
          </p>
        ) : null}

        {(canExplore || textLinks.length > 0 || iconLinks.length > 0) && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {caseStudy ? (
              <Button href={caseStudy.href}>
                Explore project
                <ArrowRight aria-hidden strokeWidth={1.75} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            ) : project.screens?.length ? (
              <Button onClick={() => setGalleryOpen(true)}>
                Explore project
                <ArrowRight aria-hidden strokeWidth={1.75} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            ) : null}

            {textLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link group"
              >
                {link.label.replace(/[→↗]/g, "").trim()}
                <ArrowUpRight aria-hidden strokeWidth={1.75} className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}

            {iconLinks.length > 0 && (
              <div className="flex items-center gap-2">
                {iconLinks.map((link) => {
                  const cleanLabel = link.label.replace(/[→↗]/g, "").trim();
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={cleanLabel}
                      title={cleanLabel}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors duration-300 hover:border-foreground/40 hover:text-foreground"
                    >
                      <ProjectLinkIcon name={link.icon!} className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {!caseStudy && project.screens?.length ? (
        <ProjectGallery
          title={project.title}
          screens={project.screens}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      ) : null}
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
      <h4 className="text-title mt-4 text-foreground/90 group-hover:text-foreground">
        {project.title}
      </h4>
      <p className="text-body mt-1 text-foreground/70">
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
            subtitle="Selected work across enterprise platforms, product engineering, and independent ventures."
          />

          <div className="space-y-24">
            {featured.map((project, idx) => (
              <FeaturedRow key={project.title} project={project} index={idx} />
            ))}
          </div>

          {experiments.length > 0 && (
            <Subsection
              label="Experiments"
              description="Smaller builds for exploring ideas, APIs, and interaction patterns."
            >
              <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {experiments.map((project) => (
                  <ExperimentItem key={project.title} project={project} />
                ))}
              </div>
            </Subsection>
          )}
        </SectionContainer>
      </div>
    </PageSection>
  );
}