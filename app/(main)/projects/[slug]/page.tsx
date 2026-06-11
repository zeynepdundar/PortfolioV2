import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/ui/PageSection";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getProjectBySlug, projects } from "@/data/projects";

/* ------------------ STATIC PARAMS & METADATA ------------------ */
export function generateStaticParams() {
  return projects
    .filter((p) => typeof p.slug === "string")
    .map((p) => ({ slug: p.slug as string }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Zeynep Dündar`,
    description: project.details?.headline ?? project.summary[0],
  };
}

/* ------------------ MEDIA ------------------ */
function MediaCard({ item, priority = false }: { item: { type: "video" | "image"; src: string; alt: string }; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/40 shadow-xl bg-background/20 backdrop-blur-sm">
      <div className="relative aspect-video w-full">
        {item.type === "video" ? (
          <video src={item.src} controls playsInline className="h-full w-full object-cover" />
        ) : (
          <Image src={item.src} alt={item.alt} fill priority={priority} className="object-cover" sizes="(max-width: 1024px) 100vw, 860px" />
        )}
      </div>
    </div>
  );
}

/* ------------------ PAGE ------------------ */
export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const details = project.details;

  return (
    <div className="w-full">
      {/* 1. BÖLÜM: HERO & MEDIA (PageSection burada biter, böylece min-h-screen tüm sayfayı mahvetmez) */}
      <PageSection id={`project-${project.slug}`}>
        <SectionContainer className="w-full pb-10">
          {/* Back Button */}
          <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/50 hover:text-foreground/80 transition-colors">
            <span className="transform transition-transform group-hover:-translate-x-1">←</span> Back to Projects
          </Link>

          {/* Header */}
          <header className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground/90">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-foreground/60 leading-relaxed">
              {details?.headline ?? project.summary[0]}
            </p>
          </header>

          {/* Media Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.media.map((item, idx) => (
              <div key={`${item.src}-${idx}`} className={idx === 0 ? "md:col-span-2" : ""}>
                <MediaCard item={item} priority={idx === 0} />
              </div>
            ))}
          </div>
        </SectionContainer>
      </PageSection>

      <div className="w-full overflow-hidden leading-[0] text-foreground/[0.04] bg-transparent -mt-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full" fill="currentColor">
          <path d="M0,0 C150,90 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1250,30 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <section className="w-full bg-foreground/[0.04] py-16">
        <SectionContainer>
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">

            {/* Left: Overview */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Project Overview
              </div>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                {(details?.overview ?? project.summary).map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>

            <div className="space-y-10 border-l border-foreground/10 pl-6 lg:pl-12">

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Highlights</h3>
                <ul className="space-y-3 text-base text-foreground/75">
                  {details?.highlights?.length ? (
                    details.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted-foreground/60 italic">More details coming soon.</li>
                  )}
                </ul>
              </div>

              {/* Scope */}
              {details?.scope?.length ? (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Scope & Technologies</h3>
                  <ul className="space-y-3 text-base text-foreground/75">
                    {details.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.statusNote && (
                <p className="mt-4 text-sm italic text-foreground/45 max-w-2xl border-l-2 border-foreground/10 pl-4 leading-relaxed">
                  {project.statusNote}
                </p>
              )}
              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Project Links</h3>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:underline"
                    >
                      {link.label} <span className="text-xs">↗</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </SectionContainer>
      </section>

      <div className="w-full overflow-hidden leading-[0] text-foreground/[0.04] bg-transparent transform rotate-180 -mt-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full" fill="currentColor">
          <path d="M0,0 C150,90 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1250,30 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
}