type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
<header className="mb-8">
  <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/40 font-medium">
    {title}
  </span>
  {subtitle && (
    <p className="mt-1 text-base font-light text-foreground/75 tracking-tight">
  {subtitle}
</p>
  )}
</header>
  );
}
