"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { projects, type ProjectMediaItem } from "@/data/projects";

type MediaItem = ProjectMediaItem;

function usePrefersDark() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    () => false,
  );
}

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
    width: 62%;
    aspect-ratio: 16 / 9;
    align-self: flex-start;
    margin-left: 0px;
    margin-bottom: -52px;
    border: 3px solid;
    transform: rotate(-1deg) translateX(-8px);
    z-index: 1;
    box-shadow: 0 6px 24px -6px rgba(0,0,0,0.20);
  }

  .sc-card-1 {
    width: 54%;
    aspect-ratio: 16 / 9;
    align-self: flex-end;
    margin-right: 4px;
    margin-bottom: -48px;
    border: 3px solid;
    transform: rotate(5deg) translateX(12px);
    z-index: 2;
    box-shadow: 0 8px 28px -4px rgba(100,116,139,0.22);
  }

  .sc-card-2 {
    width: 48%;
    aspect-ratio: 16 / 9;
    align-self: flex-start;
    margin-left: 28px;
    border: 3px solid;
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

const cardGlows = [
  { border: "#a8a8aa", bg: "#a8a8aa", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
  { border: "#a5a5a8", bg: "#a5a5a8", shadow: "0 4px 20px -2px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" },
  { border: "#aaaaa8", bg: "#aaaaa8", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
];

const fanStyles = `
  .fan-stack {
    position: relative;
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }

  .fan-card {
    position: absolute;
    width: 68%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    border: 3px solid;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
  }

  /* Left card */
  .fan-card-0 {
    transform: rotate(-3deg) translateX(-80px);
    z-index: 1;
    box-shadow: 0 4px 16px -4px rgba(100,116,139,0.20);
  }

  /* Right card — slight overlap on left card's right edge */
  .fan-card-1 {
    transform: rotate(2deg) translateX(80px);
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

// Soft band tints — each project sits on a full-width colored band,
// separated from its neighbours by a wavy divider (see WaveDivider).
const sectionBandLight = [
  "#f5f1eb", // 1 — soft peach
  "#ecf0f2", // 2 — soft teal
  "#f1edf6", // 3 — soft lavender
  "#eff2ef", // 4 — soft sage
];

const sectionBandDark = [
  "#3f3930", // 1 — muted peach
  "#27333a", // 2 — muted teal
  "#322e3d", // 3 — muted lavender
  "#2b3228", // 4 — muted sage
];

// A wavy line separator.
//
// Default (divider) mode: `color` is painted in the strip above the wave (the
// previous band's colour) so it appears to spill down into the band below it
// along an organic, wavy edge.
//
// Edge mode: `color` (the band's own colour) rises upward in waves above the
// band, giving the band a wavy top edge against the page background — without
// any solid strip sitting inside the band.
function WaveDivider({ color, edge = false }: { color: string; edge?: boolean }) {
  if (edge) {
    return (
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "calc(100% - 1px)",
          left: 0,
          width: "100%",
          lineHeight: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 36 }}
        >
          <path
            d="M0,40 L1440,40 L1440,18 C1230,-6 1080,-6 780,16 C520,34 300,34 0,14 Z"
            style={{ fill: color }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: -1,
        left: 0,
        width: "100%",
        lineHeight: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 72 }}
      >
        <path
          d="M0,0 L1440,0 L1440,40 C1230,78 1080,78 780,48 C520,22 300,22 0,52 Z"
          style={{ fill: color }}
        />
      </svg>
    </div>
  );
}


const fanGlows = [
  { border: "#a8a8aa", bg: "#a8a8aa", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
  { border: "#a5a5a8", bg: "#a5a5a8", shadow: "0 4px 20px -2px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" },
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
    height: 260px;
  }

  /* Big card — fills most of the space, slight tilt left */
  .ov-big {
    position: absolute;
    width: 82%;
    aspect-ratio: 16 / 9;
    top: 0;
    left: 0;
    border-radius: 12px;
    border: 3px solid;
    overflow: hidden;
    z-index: 1;
    transform: rotate(-1.5deg);
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
    width: 24%;
    aspect-ratio: 390 / 844;
    bottom: -10px;
    right: 16px;
    border-radius: 20px;
    border: 2px solid;
    overflow: hidden;
    z-index: 3;
    transform: rotate(3deg) translateX(6px);
    box-shadow: 0 8px 24px -4px rgba(100,116,139,0.35);
    transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.32s ease;
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

  const bigGlow = { border: "#a8a8aa", bg: "#a8a8aa", shadow: "0 4px 24px -4px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)" };
  const smallGlow = { border: "#a5a5a8", bg: "#a5a5a8", shadow: "0 4px 20px -4px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05)" };

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
        width: "72%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "3px solid #a8a8aa",
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
          fill
          style={{ objectFit: "cover", opacity: 0.93 }}
        />
      )}
    </div>

  );
}

export default function Projects() {
  const isDark = usePrefersDark();
  const bands = isDark ? sectionBandDark : sectionBandLight;

  return (
    <PageSection id="projects">
      <div className="w-full overflow-hidden">
        <SectionContainer>
          <SectionHeader
            title="Selected Works"
            subtitle="A selection of projects covering front-end development, design work, and full-stack applications"
          />
        </SectionContainer>

        <div className="mt-12">
          {projects.map((project, idx) => {
            const bg = bands[idx % bands.length];
            // Colour spilling down from above: the page background for the
            // first band, otherwise the previous band's colour.
            const prev = idx === 0 ? "var(--background)" : bands[(idx - 1) % bands.length];

            return (
              <div
                key={project.title}
                style={{ position: "relative", backgroundColor: bg }}
                className="w-full mx-6"
              >
                {idx > 0 ? (
                  <WaveDivider color={prev} />
                ) : (
                  <WaveDivider color={bg} edge />
                )}
                <SectionContainer>
                  <div className="relative z-[1] grid gap-10 pb-8 pt-16 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">
                    <div>
                      <h3 className="text-heading text-foreground/80">
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

                    <div style={{ marginRight: "-2.5rem", transform: "translateX(1.5rem)" }}>
                      {project.layout === "overlap" ? (
                        <OverlapMediaStack media={project.media} />
                      ) : project.layout === "fan" ? (
                        <FanMediaStack media={project.media} />
                      ) : project.layout === "single" ? (
                        <SingleMedia media={project.media} />
                      ) : (
                        <ScatteredMediaStack media={project.media} />
                      )}
                    </div>
                  </div>
                </SectionContainer>
              </div>
            );
          })}

          {/* Closing wave — eases the last band back into the page. */}
          <div style={{ position: "relative", height: 72 }} className="mx-6">
            <WaveDivider color={bands[(projects.length - 1) % bands.length]} />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
