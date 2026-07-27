import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex items-center transition hover:opacity-80"
    >
      <img
        src="/images/logo-zd2.svg"
        alt="Zeynep Dündar"
        className="h-5 w-auto dark:invert"
      />
    </Link>
  );
}
