import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/ui/PageSection";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((p) => typeof p.slug === "string")
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Zeynep Dündar`,
    description: project.details?.headline ?? project.summary[0],
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const details = project.details;

  return (
    <div className="w-full">
      <PageSection id={`project-${project.slug}`}>
        <SectionContainer className="w-full pb-4">
          {/* Back */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>{" "}
            Back to work
          </Link>

          {/* Header */}
          <header className="mt-8 max-w-3xl">
            {project.eyebrow && (
              <p className="text-meta">{project.eyebrow}</p>
            )}
            <h1
              className="mt-3 text-4xl tracking-tight text-foreground/90 sm:text-5xl"
              style={{ fontFamily: "var(--font-perfectly-nineties)" }}
            >
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70">
              {details?.headline ?? project.summary[0]}
            </p>

            {/* Tech + links */}
            {project.tech?.length ? (
              <p className="mt-6 text-sm text-foreground/50">
                {project.tech.join("  ·  ")}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  {link.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </header>

          {/* Demo video (portrait phone recording) */}
          {project.demoVideo && (
            <div className="mt-16 flex flex-col items-center">
              <div className="w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-border/40 bg-foreground/[0.03] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[484/1036] w-full overflow-hidden rounded-[1.6rem]">
                  <video
                    src={project.demoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">App demo</p>
            </div>
          )}

          {/* Screenshot walkthrough */}
          {project.screens?.length ? (
            <div className="mt-16">
              <p className="text-meta mb-8">Product walkthrough</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
                {project.screens.map((screen) => (
                  <figure key={screen.src} className="flex flex-col">
                    <div className="overflow-hidden rounded-[1.6rem] border border-border/40 bg-foreground/[0.03] p-1.5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)]">
                      <div className="relative aspect-[1170/2532] w-full overflow-hidden rounded-[1.25rem]">
                        <Image
                          src={screen.src}
                          alt={screen.caption}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {screen.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            /* Fallback: landscape media grid for non-app projects */
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {project.media.map((item, idx) => (
                <div
                  key={`${item.src}-${idx}`}
                  className={`overflow-hidden rounded-2xl border border-border/40 shadow-xl ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="relative aspect-video w-full">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 860px"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionContainer>
      </PageSection>

      {/* Overview / highlights / scope */}
      <section className="w-full bg-foreground/[0.03] py-16">
        <SectionContainer>
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6">
              <p className="text-meta">Overview</p>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
                {(details?.overview ?? project.summary).map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>

            <div className="space-y-10 border-l border-border/30 pl-6 lg:pl-12">
              {details?.highlights?.length ? (
                <div className="space-y-4">
                  <h3 className="text-meta">Highlights</h3>
                  <ul className="space-y-3 text-base text-foreground/75">
                    {details.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {details?.scope?.length ? (
                <div className="space-y-4">
                  <h3 className="text-meta">My role &amp; scope</h3>
                  <ul className="space-y-3 text-base text-foreground/75">
                    {details.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
