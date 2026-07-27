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
        "group inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-[var(--primary-ring)]";

    // Solid, refined black pill.
    if (variant === "primary") {
        return (
            <Link
                href={href}
                aria-label={ariaLabel}
                style={{
                    backgroundColor: "var(--foreground)",
                    boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.18), 0 12px 30px -12px rgba(0,0,0,0.5)",
                }}
                className={`${base} rounded-full px-6 py-3 text-background hover:-translate-y-[1px] ${className}`}
            >
                {children}
                {showArrow && (
                    <span
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                    >
                        →
                    </span>
                )}
            </Link>
        );
    }

    // Ghost text action — whole label turns pink on hover, with a pink
    // left-to-right underline as the shared accent.
    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={`${base} relative gap-1.5 rounded-full px-2 py-3 text-foreground/70 hover:text-[var(--primary)] ${className}`}
        >
            {children}
            {showArrow && (
                <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                >
                    →
                </span>
            )}
            {/* Underline sits at the button's bottom edge so it lines up with
                the primary button's bottom border */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-2 right-2 h-[2px] origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
        </Link>
    );
}
