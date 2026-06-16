"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  projects,
  projectCategories,
  type ProjectCategory,
  type ProjectMediaItem,
} from "@/data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

type MediaItem = ProjectMediaItem;

const scatteredStyles = `
  .sc-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 4px 16px 4px 8px;
  }

  .sc-card {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.32s ease;
  }

  .sc-card:hover {
    transform: translateX(0px) rotate(0deg) scale(1.03) !important;
    z-index: 10;
    box-shadow: 0 8px 32px -4px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08) !important;
  }

  .sc-card-0 {
    width: 92%;
    aspect-ratio: 16 / 9;
    align-self: flex-start;
    margin-left: 0px;
    margin-bottom: -72px;
    border: 1px solid;
    transform: rotate(-1deg) translateX(-8px);
    z-index: 1;
    box-shadow: 0 6px 24px -6px rgba(0,0,0,0.20);
  }

  .sc-card-1 {
    width: 80%;
    aspect-ratio: 16 / 9;
    align-self: flex-end;
    margin-right: 4px;
    margin-bottom: -64px;
    border: 1px solid;
    transform: rotate(5deg) translateX(44px);
    z-index: 2;
    box-shadow: 0 8px 28px -4px rgba(100,116,139,0.22);
  }

  .sc-card-2 {
    width: 70%;
    aspect-ratio: 16 / 9;
    align-self: flex-start;
    margin-left: 28px;
    border: 1px solid;
    transform: rotate(-5.5deg) translateX(4px);
    z-index: 3;
    box-shadow: 0 6px 20px -4px rgba(100,116,139,0.20);
  }

  .sc-card-inner {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .sc-card-media {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
  }

  .sc-card-media video,
  .sc-card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.93;
  }
`;

// Neutral, translucent frames that sit cleanly on the gradient cards.
const NEUTRAL_BORDER = "rgba(100,116,139,0.3)";

const cardGlows = [
  { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
  { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -2px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" },
  { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
];

const fanStyles = `
  .fan-stack {
    position: relative;
    width: 100%;
    height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }

  .fan-card {
    position: absolute;
    width: 80%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    border: 1px solid;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
  }

  /* Left card */
  .fan-card-0 {
    transform: rotate(-3deg) translateX(-92px);
    z-index: 1;
    box-shadow: 0 4px 16px -4px rgba(100,116,139,0.20);
  }

  /* Right card — slight overlap on left card's right edge */
  .fan-card-1 {
    transform: rotate(2deg) translateX(92px);
    z-index: 2;
    box-shadow: 0 8px 28px -4px rgba(100,116,139,0.28);
  }

  .fan-card:hover {
    transform: rotate(0deg) translateX(0) translateY(-12px) scale(1.04) !important;
    z-index: 10 !important;
    box-shadow: 0 8px 32px -4px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08) !important;
  }

  .fan-inner {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .fan-media {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 9px;
  }

  .fan-media video,
  .fan-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.93;
  }
`;

const fanGlows = [
  { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
  { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -2px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" },
];

function FanMediaStack({ media }: { media: MediaItem[] }) {
  const items = media.slice(0, 2);

  return (
    <>
      <style>{fanStyles}</style>
      <div className="fan-stack">
        {items.map((item, i) => (
          <div
            key={i}
            className={`fan-card fan-card-${i}`}
            style={{
              borderColor: fanGlows[i % 2].border,
              boxShadow: fanGlows[i % 2].shadow,
              backgroundColor: fanGlows[i % 2].bg,
            }}
          >
            <div className="fan-inner">
              <div className="fan-media">
                {item.type === "video" ? (
                  <video src={item.src} autoPlay loop muted playsInline />
                ) : (
                  <Image src={item.src} alt={item.alt} fill
                    style={{ objectFit: "cover", opacity: 0.93 }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


const overlapStyles = `
  .ov-stack {
    position: relative;
    width: 100%;
    height: 340px;
  }

  /* Big card — fills most of the space, slight tilt left */
  .ov-big {
    position: absolute;
    width: 100%;
    aspect-ratio: 16 / 9;
    top: 0;
    left: 0;
    border-radius: 12px;
    border: 1px solid;
    overflow: hidden;
    z-index: 1;
    transform: rotate(1.5deg);
    box-shadow: 0 8px 28px -6px rgba(100,116,139,0.25);
    transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.32s ease;
  }

  .ov-big:hover {
    transform: rotate(0deg) scale(1.02) !important;
    z-index: 10;
    box-shadow: 0 8px 32px -4px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08) !important;
  }

  /* Small card — iPhone 13 exact ratio 390x844, bottom-right */
  .ov-small {
    position: absolute;
    width: 34%;
    aspect-ratio: 390 / 844;
    left: -65px;
    width: 42%;
    border-radius: 20px;
    border: 1px solid;
    overflow: hidden;
    z-index: 3;
    transform: rotate(-3deg) translateX(6px);
    box-shadow: 0 8px 24px -4px rgba(100,116,139,0.35);
    transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.32s ease;
  }
    .ov-big {
  transform: perspective(1200px) rotateY(-6deg) rotate(2deg);
  box-shadow:
    0 30px 60px -20px rgba(15, 23, 42, 0.25),
    0 12px 24px -8px rgba(15, 23, 42, 0.12);
}

.ov-small {
  transform: perspective(1200px) rotateY(8deg) rotate(-6deg);
  box-shadow:
    0 24px 48px -16px rgba(15, 23, 42, 0.28),
    0 10px 20px -8px rgba(15, 23, 42, 0.15);
}

  .ov-small:hover {
    transform: rotate(0deg) scale(1.04) !important;
    z-index: 10;
    box-shadow: 0 8px 32px -4px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08) !important;
  }

  .ov-media {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .ov-inner {
    width: 100%;
    height: 100%;
    padding: 0;
  }


  .ov-media video,
  .ov-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.93;
  }
`;

function OverlapMediaStack({ media }: { media: MediaItem[] }) {
  const big = media[0];
  const small = media[1];

  const bigGlow = { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 24px -4px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)" };
  const smallGlow = { border: NEUTRAL_BORDER, bg: "transparent", shadow: "0 4px 20px -4px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05)" };

  function renderMedia(item: MediaItem) {
    return item.type === "video" ? (
      <video src={item.src} autoPlay loop muted playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.93 }} />
    ) : (
      <Image src={item.src} alt={item.alt} fill
        style={{ objectFit: "cover", opacity: 0.93 }} />
    );
  }

  return (
    <>
      <style>{overlapStyles}</style>
      <div className="ov-stack">
        <div className="ov-big" style={{ borderColor: bigGlow.border, boxShadow: bigGlow.shadow, backgroundColor: bigGlow.bg }}>
          <div className="ov-inner">
            <div className="ov-media">{renderMedia(big)}</div>
          </div>
        </div>
        {small && (
          <div className="ov-small" style={{ borderColor: smallGlow.border, boxShadow: smallGlow.shadow, backgroundColor: smallGlow.bg }}>
            <div className="ov-inner">
              <div className="ov-media">{renderMedia(small)}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


function ScatteredMediaStack({ media }: { media: MediaItem[] }) {
  const items = media.slice(0, 3);

  return (
    <>
      <style>{scatteredStyles}</style>
      <div className="sc-stack">
        {items.map((item, i) => (
          <div
            key={i}
            className={`sc-card sc-card-${i}`}
            style={{
              borderColor: cardGlows[i].border,
              boxShadow: cardGlows[i].shadow,
              backgroundColor: cardGlows[i].bg,
            }}
          >
            <div className="sc-card-inner">
              <div
                className="sc-card-media"
                style={{
                  width: "100%",
                  aspectRatio: "16/9", // fixes the card ratio
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // fills card like image
                    }}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover", opacity: 0.93 }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

function SingleMedia({ media }: { media: MediaItem[] }) {
  const item = media[0];

  return (
    <div
      style={{
        width: "88%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(100,116,139,0.3)",
        boxShadow: "0 6px 24px -6px rgba(0,0,0,0.2)",
        position: "relative",
      }}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={1602}
          height={472}
          style={{ width: "100%", height: "auto", display: "block", opacity: 0.93 }}
        />
      )}
    </div>

  );
}

function CircleMedia({ media }: { media: MediaItem[] }) {
  const item = media[0];

  return (
    <div className="flex w-full items-center justify-center py-4">
      <div
        style={{
          position: "relative",
          width: "min(66%, 340px)",
          aspectRatio: "1 / 1",
          borderRadius: "9999px",
          overflow: "hidden",
          background:
            "radial-gradient(120% 120% at 30% 25%, #2a2a2e 0%, #141416 45%, #050506 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.55), 0 12px 28px -12px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.06)",
          transition:
            "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16%",
          }}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              width={340}
              height={340}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({ project }: { project: (typeof projects)[number] }) {
  return project.layout === "overlap" ? (
    <OverlapMediaStack media={project.media} />
  ) : project.layout === "fan" ? (
    <FanMediaStack media={project.media} />
  ) : project.layout === "single" ? (
    <SingleMedia media={project.media} />
  ) : project.layout === "circle" ? (
    <CircleMedia media={project.media} />
  ) : (
    <ScatteredMediaStack media={project.media} />
  );
}

// Fancy, translucent gradient tints for each project card. Low opacity keeps
// them adapting gracefully to both light and dark themes (they sit over the
// page --background rather than painting a solid colour).
const cardBackgrounds = [
  "bg-gradient-to-br from-rose-400/15 via-orange-300/10 to-amber-200/15",
  "bg-gradient-to-br from-sky-400/15 via-cyan-300/10 to-teal-200/15",
  "bg-gradient-to-br from-violet-400/15 via-purple-300/10 to-fuchsia-200/15",
  "bg-gradient-to-br from-emerald-400/15 via-green-300/10 to-lime-200/15",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageSection id="projects">
      <div className="w-full overflow-hidden">
        <SectionContainer>
          <SectionHeader
            title="Selected Works"
            subtitle="A selection of projects covering front-end development, design work, and full-stack applications"
          />

          {/* Category filter chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "border-foreground/70 bg-foreground/85 text-background"
                      : "border-border/50 text-muted-foreground/70 hover:border-foreground/40 hover:text-foreground/80"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Each project sits in its own rounded card with a fancy gradient
              tint and generous inner padding. Cards align to the content edges
              (inside SectionContainer) and alternate media left/right. */}
          <div className="mt-16 space-y-10">
            {visibleProjects.map((project, idx) => {
              const mediaRight = idx % 2 === 0;

              return (
                <article
                  key={project.title}
                  className={`grid items-center gap-x-12 gap-y-10 rounded-3xl border border-border/30 p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-12 ${cardBackgrounds[idx % cardBackgrounds.length]}`}
                >
                  <div className={mediaRight ? "lg:order-1" : "lg:order-2"}>
                    {project.eyebrow && (
                      <p className="mb-2 text-xs font-small uppercase tracking-widest text-muted-foreground/80">
                        {project.eyebrow}
                      </p>
                    )}
                    <h3 className="text-heading text-foreground/85">
                      {project.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-body-lg text-foreground/55">
                      {project.summary.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link text-muted-foreground/40 hover:text-foreground/70"
                        >
                          {link.label}
                        </a>
                      ))}
                      {!!project.slug && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-link font-medium text-foreground/70 hover:text-foreground"
                        >
                          View details →
                        </Link>
                      )}
                    </div>
                  </div>

                  <div
                    className={
                      mediaRight
                        ? "lg:order-2 lg:translate-x-8"
                        : "lg:order-1 lg:-translate-x-8"
                    }
                  >
                    <ProjectMedia project={project} />
                  </div>
                </article>
              );
            })}
          </div>
        </SectionContainer>
      </div>
    </PageSection>
  );
}
