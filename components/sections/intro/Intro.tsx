import Image from "next/image";
import Link from "next/link";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        <div className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
          <div className="text-left">
            <p className="text-xs font-normal uppercase leading-relaxed tracking-[0.18em] text-foreground/60">
              Zeynep Dündar · Software Engineer
            </p>

            <h1 className="mt-6 text-[clamp(2.25rem,4vw,4rem)] font-normal leading-[1.12] tracking-[-0.035em] text-foreground">              Building software
              <br />
              <span className="relative inline-block pb-2 font-serif font-normal italic">
                people use
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-2 w-full -rotate-2 rounded-[50%] border-t border-foreground/25"
                />
              </span>
              <br />
              every day.
            </h1>

            <p className="mt-8 max-w-lg text-base font-normal leading-relaxed text-foreground/70 sm:text-lg">
              From enterprise applications to independent web
              and mobile products.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/60">
              Currently at OraxAI. Previously at Accenture,
              LINGA and Renault Group.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-normal text-background transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                View work
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/20 px-7 py-3 text-sm font-normal text-foreground transition-colors hover:border-foreground/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative isolate aspect-[4/5] w-full max-w-[260px] justify-self-center lg:max-w-[320px] lg:justify-self-end">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/profile.png"
                alt="Zeynep Dündar"
                fill
                priority
                sizes="(max-width: 1023px) 260px, 320px"
                className="object-cover object-top contrast-[0.95]"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 text-foreground"
            >
              {[
                "-right-3 -top-4 h-10 w-10 rotate-12 opacity-70",
                "right-8 -top-7 h-5 w-5 -rotate-12 opacity-40",
                "-right-5 top-10 h-4 w-4 rotate-6 opacity-50",
                "-bottom-3 -left-3 h-8 w-8 -rotate-12 opacity-60",
                "-left-5 bottom-10 h-4 w-4 rotate-12 opacity-35",
                "bottom-0 left-8 h-3 w-3 opacity-40",
              ].map((position) => (
                <svg
                  key={position}
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  className={`absolute ${position}`}
                >
                  <path d="M16 2 Q18 14 30 16 Q18 18 16 30 Q14 18 2 16 Q14 14 16 2Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}