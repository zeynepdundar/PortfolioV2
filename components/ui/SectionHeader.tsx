type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

/** Page-level section title. Content below it starts without extra margin. */
export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-12">
      <h2
        className="text-heading text-foreground/90"
        style={{ fontFamily: "var(--font-perfectly-nineties)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg mt-3 max-w-2xl text-foreground/70">{subtitle}</p>
      )}
    </header>
  );
}
