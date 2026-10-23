/** Shared content column — the header uses it too so the logo and nav line up with page content. */
export const CONTENT_WIDTH = "mx-auto w-full max-w-5xl px-6";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <div className={`${CONTENT_WIDTH} ${className}`.trim()}>
      {children}
    </div>
  );
}
