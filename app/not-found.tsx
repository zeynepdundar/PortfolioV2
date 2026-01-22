// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="rounded-xl bg-primary px-6 py-3 text-white hover:opacity-80 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
