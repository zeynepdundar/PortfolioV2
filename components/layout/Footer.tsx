
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} Zeynep Dündar. All rights reserved.
        </p>
        <p className="text-muted">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="  text-foreground/70
  hover:text-foreground
  transition
  hover:translate-x-0.5"
          >
            Next.js
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="  text-foreground/70
  hover:text-foreground
  transition
  hover:translate-x-0.5"
          >
            Vercel
          </a>
          . Source code available on{" "}
          <a
            href="https://github.com/zeynepdundar/PortfolioV2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition"
          >
            GitHub
          </a>.
        </p>

      </div>
    </footer>
  );
}
