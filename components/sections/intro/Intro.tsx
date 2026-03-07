import Image from "next/image";
import { PageSection } from "../../ui/PageSection";
import { SectionContainer } from "../../ui/SectionContainer";

export default function Intro() {
  return (
    <PageSection id="home">
      <SectionContainer>
        <div className="w-full pt-8 sm:pt-10">
          <div className="space-y-6 sm:space-y-8">

            <header className="space-y-3">
              <div className="flex items-center gap-4">
                {/* Profile image */}
                <div className="relative shrink-0 h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/20 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.3)]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Zeynep Dündar"
                      width={160}
                      height={160}
                      className="object-cover contrast-[0.9]"
                      priority
                    />
                  </div>
                </div>

                {/* Name group */}
                <div>
                  <span className="block text-[11px] tracking-[0.25em] uppercase text-muted-foreground/40 font-medium mb-0.5">
                    Hey, I'm
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground/75 leading-none">
                    Zeynep Dündar
                  </h1>
                </div>
              </div>

              {/* Badge */}
              <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/40 font-medium">
  Frontend Engineer · UX-focused
</span>
            </header>

            {/* Body copy */}
            <div className="max-w-2xl space-y-3">
              <p className="text-xl sm:text-2xl font-light text-foreground/75 leading-snug tracking-tight"
              >
                Welcome to my corner of the internet.
              </p>
              <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/55">
                I'm a frontend engineer with a love for design and a habit of obsessing
                over the small things — the ones most people never notice but always{" "}
                <span className="italic text-foreground/75">feel</span>.
              </p>
              <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/55">
                My work lives at the intersection of engineering and design, where
                performance, accessibility, and quiet attention to detail shape how
                an interface earns trust.
              </p>
            </div>

            {/* Photo strip */}
            <ul className="flex items-end gap-2 sm:gap-3 overflow-visible py-4 px-1 list-none">
              {[
                { src: "/images/me/gallery-1.jpg", alt: "Photo 1", rotate: "-3deg", y: "8px" },
                { src: "/images/me/gallery-3.jpg", alt: "Photo 3", rotate: "-1deg", y: "12px" },
                { src: "/images/me/gallery-4.jpg", alt: "Photo 4", rotate: "3deg", y: "-4px" },
                { src: "/images/me/gallery-5.jpg", alt: "Photo 5", rotate: "-2deg", y: "6px" },
                { src: "/images/me/gallery-6.jpg", alt: "Photo 6", rotate: "2deg", y: "-6px" },
              ].map((img, i) => (
                <li
                  key={i}
                  className="group relative flex-1 min-w-0 max-w-[160px]
                    overflow-hidden rounded-lg border border-border/20
                    shadow-[0_8px_24px_-8px_rgba(0,0,0,0.2)]
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.03] hover:z-10"
                  style={{ transform: `rotate(${img.rotate}) translateY(${img.y})` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                </li>
              ))}
            </ul>

          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}