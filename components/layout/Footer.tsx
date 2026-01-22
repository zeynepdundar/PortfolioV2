
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Copyright */}
        <p className="py-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Zeynep Dundar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
