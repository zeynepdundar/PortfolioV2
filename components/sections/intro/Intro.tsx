import Image from "next/image";
import Link from "next/link";

import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        <div className="w-full pt-8 sm:pt-10" >
          <div className="space-y-6 sm:space-y-8">

            <header className="space-y-3">
              <h1 className="sr-only">Zeynep Dündar – Software Engineer</h1>

              <div className="flex items-center gap-4">
                {/* Profile image */}
                <div className="relative shrink-0 h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/20 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.3)]">
                    <Image
                      src="/images/profile.png"
                      alt="Zeynep Dündar"
                      width={160}
                      height={160}
                      className="object-cover contrast-[0.9]"
                      priority
                    />
                  </div>
                </div>

                {/* Greeting SVG */}
                <Image
                  src="/images/Hello2.svg"
                  alt=""
                  aria-hidden="true"
                  width={480}
                  height={120}
                  priority
                  className="w-[80vw] max-w-[30em] h-auto mt-6"
                />
              </div>

              {/* Badge */}
              <span className="text-meta sm:text-sm">
                Software Engineer · Building Modern, User-Centered Web Systems
              </span>
            </header>

            {/* Body copy */}
            <div className="max-w-2xl space-y-4">
              <p className="text-heading text-foreground/80">
                This is my little corner of the internet
              </p>

              <p className="text-body-lg text-foreground/65">
                I design and develop digital products that feel simple, fast, and usable for everyone no matter the device, context, or constraints.
              </p>

              <p className="text-body-lg text-foreground/65">
                I focus on long-term product quality, architecture, performance, and the subtle interactions that shape how users experience software.
              </p>
            </div>


            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Primary CTA */}
              <Link
                href="/about"
                aria-label="Learn more about Zeynep Dündar"
                className="group inline-flex items-center justify-center
      rounded-full border border-[var(--primary)]
      px-6 py-3
      text-sm font-mono
      text-[var(--primary)]
      bg-transparent
      transition-all duration-300 ease-in-out
      hover:bg-[var(--primary)] hover:text-white
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[var(--primary-ring)]
      focus-visible:ring-offset-2
      focus-visible:ring-offset-background"
              >
                More about me
                <span
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projects"
                aria-label="View Zeynep Dündar's projects"
                className="inline-flex items-center justify-center
      rounded-full border border-border/40
      px-6 py-3
      text-sm font-medium
      text-foreground/80
      transition-all duration-300
      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
      hover:bg-[var(--primary-soft)]
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[var(--primary-ring)]
      focus-visible:ring-offset-2
      focus-visible:ring-offset-background"
              >
                View work
              </Link>
            </div>

          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}
