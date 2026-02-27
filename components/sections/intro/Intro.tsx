import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        <div className="w-full pt-10 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="order-2 lg:order-1">

              <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Zeynep Dündar
              </h1>

              <div className="mt-4 flex items-center">
                <span className="py-1 text-xs sm:text-sm text-muted italic">
                  Frontend Engineer · UX-focused
                </span>
                
              </div>
              <div className="mt-6 max-w-2xl space-y-4 text-lg sm:text-xl leading-relaxed text-muted">
                <p className="text-foreground/90">
                  I build interfaces that feel calm, intentional, and easy to trust.
                </p>
                <p>
                  My work sits at the intersection of engineering and design
                  where performance, accessibility, and small details quietly
                  shape the user experience.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 justify-self-center">
              <div className="relative h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-3xl border border-border/60 bg-background shadow-[0_18px_50px_-26px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Zeynep Dündar"
                  width={960}
                  height={960}
                  className="object-cover contrast-90"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}
