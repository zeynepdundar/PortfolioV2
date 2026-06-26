"use client";

import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";
import { Button } from "@/components/ui/Button";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        <div className="w-full pt-10 sm:pt-14">
          <div className="space-y-10 sm:space-y-12">

            {/* HEADER */}
            <header className="space-y-6">

              <h1 className="sr-only">
                Zeynep Dündar – Software Engineer
              </h1>

              {/* HERO ROW */}
              <div className="flex items-end gap-6 sm:gap-8">

                {/* AVATAR (more grounded, less floating) */}
                <div className="relative shrink-0 h-16 w-16 sm:h-[5rem] sm:w-[5rem] mb-4">
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                    <Image
                      src="/images/profile.png"
                      alt="Zeynep Dündar"
                      width={160}
                      height={160}
                      className="object-cover contrast-[0.95] grayscale-[5%]"
                      priority
                    />
                  </div>
                </div>

                {/* HELLO */}
                <Image
                  src="/images/Hello2.svg"
                  alt=""
                  aria-hidden="true"
                  width={520}
                  height={140}
                  priority
                  className="w-[85vw] max-w-[32em] h-auto opacity-100"
                />
              </div>

              {/* TITLE (stronger hierarchy) */}

              <p
                className="mt-5 max-w-xl text-xl sm:text-2xl leading-snug tracking-tight text-foreground/85"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
Software Engineer <span className="text-foreground/40">·</span>{" "}
Building high-performance systems<br className="hidden sm:block" />
& refined user experiences
              </p>

              {/* BODY (more contrast separation) */}
              <div className="max-w-2xl space-y-6">

                <p className="text-body-lg font-medium text-foreground/85 leading-relaxed">
                  I design and build fast, scalable web products with strong architecture and refined UX.
                </p>

                <p className="text-body-lg text-foreground/60 leading-relaxed">
                  My focus is system-level thinking, performance, and interaction detail —
                  from backend structure to the smallest UI behavior that defines how a product feels.
                </p>
              </div>

              {/* CTA (more presence separation) */}
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 pt-2">

                <Button
                  href="/projects"
                  ariaLabel="View projects"
                  variant="primary"
                  className="shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
                >
                  View work
                </Button>

                <Button
                  href="/about"
                  ariaLabel="About me"
                  variant="outline"
                  showArrow
                >
                  More about me
                </Button>

              </div>
            </header>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}