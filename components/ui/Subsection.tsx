type SubsectionProps = {
  label: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

/** A labelled block inside a section (Work, Experiments …): divider, meta label, optional lead. */
export function Subsection({ label, description, children, className = "" }: SubsectionProps) {
  return (
    <div className={`mt-24 border-t border-foreground/10 pt-12 ${className}`.trim()}>
      <span className="text-meta">{label}</span>
      {description && (
        <div className="text-body-lg mt-4 max-w-2xl text-foreground/70">{description}</div>
      )}
      {children}
    </div>
  );
}
