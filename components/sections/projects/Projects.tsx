"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { projects } from "@/data/projects";



type MediaItem = { type: string; src: string; alt: string };

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

const sectionBgLight = [
  "rgba(235,228,220,0.30)", // 1 — dusty peach
  "rgba(214,226,228,0.30)", // 2 — soft teal mist
  "rgba(228,222,235,0.30)", // 3 — lavender haze
  "rgba(220,230,220,0.30)", // 4 — sage whisper
];

const sectionBgDark = [
  "rgba(58,46,38,0.45)", // 1 — deep peach
  "rgba(34,52,56,0.45)", // 2 — deep teal
  "rgba(46,38,58,0.45)", // 3 — deep lavender
  "rgba(36,50,38,0.45)", // 4 — deep sage
];


const fanGlows = [
  { border: "#a8a8aa", bg: "#a8a8aa", shadow: "0 4px 20px -2px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" },
  { border: "#a5a5a8", bg: "#a5a5a8", shadow: "0 4px 20px -2px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" },
];

function FanMediaStack({ media }: { media: MediaItem[] }) {
  const items = media.slice(0, 2);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <PageSection id="projects">
      <SectionContainer>
        <SectionHeader
          title="Selected Works"
          subtitle="A non-chronological list of select projects covering front-end development and design work."
        />

        <div className="mt-16 flex flex-col gap-6">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              style={{
                backgroundColor: isDark ? sectionBgDark[idx] : sectionBgLight[idx],
                overflow: "visible",
              }}
              className="pl-8 pr-0 py-12 rounded-2xl overflow-visible"
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-center overflow-visible">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-foreground/80">
                    {project.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-base sm:text-lg font-light leading-relaxed text-foreground/55">
                    {project.summary.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-6 text-xs tracking-[0.2em] uppercase">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.2em] uppercase text-muted-foreground/40 font-medium hover:text-foreground/70 transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{ marginRight: "-2.5rem", transform: "translateX(1.5rem)" }}>
                  {(project).layout === "overlap"
                    ? <OverlapMediaStack media={project.media} />
                    : (project as any).layout === "fan"
                      ? <FanMediaStack media={project.media} />
                      : (project as any).layout === "single"
                        ? <SingleMedia media={project.media} />
                        : <ScatteredMediaStack media={project.media} />
                  }
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </PageSection>
  );
}