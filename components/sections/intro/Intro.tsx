"use client";

import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";
import { Button } from "@/components/ui/Button";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer className="flex flex-col items-center text-center">
        <div className="flex w-full max-w-2xl flex-col items-center pt-6 sm:pt-10">
          <h1 className="sr-only">Zeynep Dündar — Frontend Engineer</h1>

          {/* Small avatar — a face for accountability */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/15 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/profile.png"
              alt="Zeynep Dündar"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </div>

          {/* Name / role eyebrow */}
          <p className="mt-6 text-meta text-muted-foreground/60">
            Zeynep Dündar · Software Engineer
          </p>

          {/* Headline */}
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl">
            Building enterprise software and independent products.
          </h2>

          {/* Subhead — leads with the enterprise + independent-product story */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/55 sm:text-lg">
            Currently at OraxAI. Previously Accenture, LINGA, Renault Group.          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/projects" ariaLabel="View work" variant="primary">
              View work
            </Button>
            <Button
              href="/contact"
              ariaLabel="Get in touch"
              variant="outline"
              showArrow
            >
              Get in touch
            </Button>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}
