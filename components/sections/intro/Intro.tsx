import Image from "next/image";
import Link from "next/link";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";
import { Caveat } from "next/font/google";
import { ArrowRight, Mail } from "lucide-react";

const handwriting = Caveat({ subsets: ["latin"], weight: ["400"] });

/** Concave four-point sparkle, drawn as an outline. */
const SPARKLE_PATH = "M16 1 Q17.5 14.5 31 16 Q17.5 17.5 16 31 Q14.5 17.5 1 16 Q14.5 14.5 16 1Z";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        {/* Mobile order: heading → photo → copy & actions. Desktop: text left, photo right. */}
        <div className="grid items-center gap-10 py-6 sm:py-8 lg:grid-cols-[1.1fr_1fr] lg:gap-x-16 lg:gap-y-0 lg:py-10">
          <div className="order-1 text-left lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-foreground/60">
              Zeynep Dündar · Software Engineer
            </p>

            <h1 className="mt-6 text-[clamp(2.25rem,4vw,4rem)] font-normal leading-[1.12] tracking-[-0.035em] text-foreground">              Building software
              <br />
              <span className="relative isolate inline-block font-serif font-normal italic">
                people use
                {/* Thin, softly arched brush stroke — peach → salmon → pink, echoing the background orbs */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-[0.12em] -left-[0.04em] -z-10 h-[0.34em] w-[calc(100%+0.06em)] -rotate-[1.5deg]"
                >
                  <defs>
                    <linearGradient id="intro-brush" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#ffb08a" stopOpacity="0.25" />
                      <stop offset="0.45" stopColor="#ff685d" stopOpacity="0.75" />
                      <stop offset="0.85" stopColor="#e26f9e" stopOpacity="0.85" />
                      <stop offset="1" stopColor="#d67aa3" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="intro-brush-texture" x="-2%" y="-50%" width="104%" height="200%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.8" numOctaves="2" seed="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" />
                    </filter>
                  </defs>
                  <g filter="url(#intro-brush-texture)" fill="url(#intro-brush)">
                    <path d="M1 17.5 Q 105 -5 199 10.5 Q 199.6 11.8 198 12.4 Q 105 0 1.5 18.6 Q 0.4 18.2 1 17.5 Z" />
                    {/* bristle streaks */}
                    <path opacity="0.5" d="M8 17.6 Q 105 -1.6 192 12.4 Q 105 1.4 9 18.6 Z" />
                    <path opacity="0.45" d="M20 15 Q 105 -4.6 180 9.6 Q 105 -2.8 22 15.8 Z" />
                  </g>
                </svg>
              </span>
              <br />
              every day.
            </h1>
          </div>

          <div className="order-3 text-left lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="max-w-lg lg:mt-8 text-base font-normal leading-relaxed text-foreground/70 sm:text-lg">
              From complex enterprise systems to independently shipped web and
              mobile products, I bring ideas from architecture to launch.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/60">
              Frontend Architecture · Full-Stack Engineering · Product Engineering
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 w-full items-center sm:w-auto justify-center rounded-full bg-foreground px-7 py-3 text-sm font-normal text-background transition-opacity duration-300 hover:opacity-80"
              >
                View work
                <ArrowRight aria-hidden className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center rounded-full border border-foreground/20 px-7 py-3 text-sm font-normal text-foreground transition-colors duration-300 hover:border-foreground/50"
              >
                <Mail aria-hidden className="mr-2 h-4 w-4" strokeWidth={1.75} />
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-foreground/10 pt-5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1">
              <span className="text-xs font-normal uppercase tracking-[0.18em] text-foreground/50">
                Experience
              </span>
              <span className="text-[15px] text-foreground/75">
                OraxAI · LINGA · Accenture · Renault Group
              </span>
            </div>
          </div>

          <div className="relative isolate order-2 aspect-[4/5] w-full max-w-[200px] justify-self-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[240px]">
            {/* ---- Background drawings (behind the photo) ---- */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              {/* soft lavender blob, top-left */}
              <div className="absolute -left-[14%] -top-[9%] h-[32%] w-[58%] -rotate-6 rounded-[48%] bg-[#d9d3f3]/60 dark:bg-[#8a80c9]/20" />
              {/* soft beige circle, right */}
              <div className="absolute -right-[24%] top-[48%] aspect-square w-[46%] rounded-full bg-[#f2e0cf]/70 dark:bg-[#c9a27f]/15" />
              {/* thin hand-drawn loops */}
              <svg
                viewBox="0 0 300 330"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                className="absolute -left-[18%] -top-[14%] h-[128%] w-[136%] overflow-visible text-foreground/15"
              >
                <path d="M30 120 C 10 60, 70 20, 140 22 S 250 30, 262 62" />
                <path d="M44 150 C 0 170, -6 250, 44 262 S 70 230, 46 205" />
              </svg>
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/profile.png"
                alt="Zeynep Dündar"
                fill
                priority
                sizes="(max-width: 1023px) 200px, 240px"
                className="object-cover object-top contrast-[0.95]"
              />
            </div>

            {/* ---- Foreground: sparkles + handwritten note ---- */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 text-foreground">
              {[
                "-right-[4%] -top-[15%] h-11 w-11 -rotate-6",
                "-right-[16%] -top-[3%] h-6 w-6 rotate-12",
              ].map((position) => (
                <svg
                  key={position}
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  className={`absolute opacity-80 ${position}`}
                >
                  <path d={SPARKLE_PATH} />
                </svg>
              ))}
            </div>

            {/* Mobile: small handwritten caption under the photo (side note shows from sm up) */}
            <p
              className={`${handwriting.className} absolute -bottom-8 right-0 whitespace-nowrap text-lg text-foreground/70 sm:hidden`}
            >
              Hi, I&apos;m Zeynep ✧
            </p>

            <div
              className={`${handwriting.className} pointer-events-none absolute left-[calc(100%+14px)] top-[24%] hidden -rotate-[10deg] whitespace-nowrap text-[1.35rem] leading-[1.15] text-foreground/75 sm:block`}
            >
              <span className="block">Hi,</span>
              <span className="block pl-1">I&apos;m Zeynep</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                className="ml-1 mt-1 h-2.5 w-24 opacity-30"
              >
                <path d="M2 8 C 30 4, 64 2, 98 3" />
              </svg>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}