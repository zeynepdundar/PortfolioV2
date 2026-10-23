import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
} & (
  | { href: string; external?: boolean; onClick?: never }
  | { href?: never; external?: never; onClick: () => void }
);

const base =
  "group inline-flex min-h-12 items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const pill = "gap-2 rounded-full px-7 py-3 text-sm font-normal";

const variants: Record<ButtonVariant, string> = {
  primary: `${pill} bg-foreground text-background hover:opacity-80`,
  outline: `${pill} border border-foreground/20 text-foreground hover:border-foreground/50`,
  /* Borderless editorial link — "Visit our landing page →" */
  link: "min-h-11! gap-1.5 rounded-md text-base font-medium tracking-tight text-accent hover:text-foreground sm:text-lg",
};

/** The site-wide pill button (hero CTAs, project actions). */
export function Button({
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if (rest.onClick) {
    return (
      <button type="button" onClick={rest.onClick} aria-label={ariaLabel} className={cls}>
        {children}
      </button>
    );
  }

  if (rest.external) {
    return (
      <a href={rest.href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={rest.href!} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  );
}
