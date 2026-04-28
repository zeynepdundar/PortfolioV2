// components/ui/Button.tsx
import Link from "next/link";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    ariaLabel?: string;
    variant?: ButtonVariant;
    showArrow?: boolean;
    className?: string;
}

export function Button({
    href,
    children,
    ariaLabel,
    variant = "primary",
    showArrow = false,
    className = "",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

    const variants: Record<ButtonVariant, string> = {
        primary: `
      bg-[var(--primary)]
      text-white
      border border-[var(--primary)]
      hover:opacity-90
      focus-visible:ring-[var(--primary-ring)]
    `,
        outline: `
  bg-transparent
  text-[var(--primary)]
  border border-[var(--primary)]
  hover:bg-[var(--primary)]/10
  hover:border-[var(--primary)]
  hover:text-[var(--primary)]
    `,
    };

    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}

            {showArrow && (
                <span
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                >
                    →
                </span>
            )}
        </Link>
    );
}