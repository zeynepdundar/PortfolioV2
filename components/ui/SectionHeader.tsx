type SectionHeaderProps = {
  title: string;
  /** Kept for call-site compatibility; no longer rendered. */
  subtitle?: string;
};

/**
 * Page title for assistive tech and SEO only. Pages open straight into
 * their content, so the heading is visually hidden.
 */
export function SectionHeader({ title }: SectionHeaderProps) {
  return <h1 className="sr-only">{title}</h1>;
}
