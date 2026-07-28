type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-8">
      <h2
        className="text-2xl tracking-tight text-foreground/90 sm:text-3xl"
        style={{ fontFamily: "var(--font-perfectly-nineties)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}
