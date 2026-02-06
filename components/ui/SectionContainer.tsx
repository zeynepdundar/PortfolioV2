type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
