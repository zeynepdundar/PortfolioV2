type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-8">
      <span className="text-meta text-muted-foreground/40">{title}</span>
      {subtitle && (
        <p className="mt-1 text-body-lg text-foreground/75 tracking-tight leading-snug">
          {subtitle}
        </p>
      )}
    </header>
  );
}
