import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";
import { Button } from "@/components/ui/Button";

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
              {/*
              <p className="text-heading text-foreground/80">
                This is my little corner of the internet
              </p>
              */}
              <p className="text-body-lg text-foreground/65">
              I design and build fast, intuitive web products that scale             </p>

              <p className="text-body-lg text-foreground/65">
                I focus on long-term product quality, architecture, performance, and the interaction details that shape how software feels to use.
              </p>
            </div>


            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                href="/projects"
                ariaLabel="View Zeynep Dündar's projects"
                variant="primary"
              >
                View work
              </Button>
              <Button
                href="/about"
                ariaLabel="Learn more about Zeynep Dündar"
                variant="outline"
                showArrow
              >
                More about me
              </Button>


            </div>

          </div>
        </div>
      </SectionContainer>
    </PageSection >
  );
}
