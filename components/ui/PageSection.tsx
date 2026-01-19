export function PageSection({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) {
    return (
      <section
        id={id}
        className="min-h-screen flex items-start pt-32"
      >
        {children}
      </section>
    );
  }
  