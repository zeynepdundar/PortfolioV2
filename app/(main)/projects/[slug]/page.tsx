import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/ui/PageSection";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getProjectBySlug, projects } from "@/data/projects";

/* ------------------ STATIC PARAMS ------------------ */

export function generateStaticParams() {
  return projects
    .filter((p) => typeof p.slug === "string")
    .map((p) => ({ slug: p.slug as string }));
}

/* ------------------ METADATA ------------------ */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Zeynep Dündar`,
    description: project.details?.headline ?? project.summary[0],
  };
}

/* ------------------ MEDIA ------------------ */

function MediaCard({
  item,
  priority = false,
}: {
  item: { type: "video" | "image"; src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/35">
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
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 860px"
          />
        )}
      </div>
    </div>
  );
}

/* ------------------ PAGE ------------------ */

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const details = project.details;

  return (
    <PageSection id={`project-${project.slug}`}>
      <SectionContainer className="pb-24">
        {/* Back */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-link text-muted-foreground/40 hover:text-foreground/70"
          >
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <header className="mt-6">
          <h1 className="text-display text-foreground/85">
            {project.title}
          </h1>

          <p className="mt-3 text-body-lg text-foreground/65">
            {details?.headline ?? project.summary[0]}
          </p>
        </header>

        {/* Media */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.media.map((item, idx) => (
            <div
              key={`${item.src}-${idx}`}
              className={idx === 0 ? "md:col-span-2" : ""}
            >
              <MediaCard item={item} priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          {/* Overview */}
          <div>
            <h2 className="text-meta text-muted-foreground/40">
              Overview
            </h2>

            <div className="mt-3 space-y-4 text-body-lg text-foreground/65">
              {(details?.overview ?? project.summary).map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Highlights */}
            <div className="rounded-2xl border border-border/60 bg-background/30 p-6">
              <h2 className="text-meta text-muted-foreground/40">
                Highlights
              </h2>

              <ul className="mt-4 space-y-2 text-body text-foreground/65">
                {details?.highlights?.length ? (
                  details.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/25"
                      />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-foreground/55">
                    More details coming soon.
                  </li>
                )}
              </ul>
            </div>

            {/* Scope */}
            {details?.scope?.length ? (
              <div className="rounded-2xl border border-border/60 bg-background/30 p-6">
                <h2 className="text-meta text-muted-foreground/40">
                  Scope
                </h2>

                <ul className="mt-4 space-y-2 text-body text-foreground/65">
                  {details.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/25"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Links */}
            <div className="rounded-2xl border border-border/60 bg-background/30 p-6">
              <h2 className="text-meta text-muted-foreground/40">
                Links
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-5">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-muted-foreground/40 hover:text-foreground/70"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </PageSection>
  );
}