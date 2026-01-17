type SectionHeaderProps = {
    title: string;
    subtitle?: string;
  };
  
  export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
      <div className="mb-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mt-2 text-muted text-lg">
            {subtitle}
          </p>
        )}
  
        <div className="mt-4 h-px w-12 bg-border" />
      </div>
    );
  }
  