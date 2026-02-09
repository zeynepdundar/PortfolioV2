type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted">
          {subtitle}
        </p>
      )}

      {/* Accent line */}
      <div className="mt-6 h-px w-16 bg-border" />
    </div>
  );
}
