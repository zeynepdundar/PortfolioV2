import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-semibold text-foreground">
          To get started, edit the page.tsx file.
        </h1>

        <p className="max-w-xl text-lg text-muted">
          Looking for a starting point or more instructions?
        </p>

        <div className="flex gap-4">
          <a className="rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-hover transition">
            Deploy Now
          </a>

          <a className="rounded-lg border border-border px-6 py-3 hover:bg-surface transition">
            Documentation
          </a>
        </div>
        <div className="h-[120vh]" />
      </div>
    </section>
  );
}

