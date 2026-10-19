
export default function Footer() {
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
            className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            Next.js
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            Vercel
          </a>
          . Source code available on{" "}
          <a
            href="https://github.com/zeynepdundar/PortfolioV2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            GitHub
          </a>.
        </p>

      </div>
    </footer>
  );
}
