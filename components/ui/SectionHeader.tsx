type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <header className="mb-8">
      <h2 className="text-xl sm:text-2xl font-medium text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm sm:text-base font-light leading-snug text-foreground/65">
          {subtitle}
        </p>
      )}
    </header>
  );
}
