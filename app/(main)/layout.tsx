import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import localFont from "next/font/local";
import UtilityRail from "@/components/layout/UtilityRail";

const plusJakarta = localFont({
  src: [
    { path: "../../public/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showMaintenance = false;

  if (showMaintenance) {
    return (
      <div
        className={`
          bg-background text-foreground antialiased
          ${plusJakarta.variable}
        `}
      >
        <main className="min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#11161f] to-[#0b0c10] text-white">
          <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Site Refresh in Progress
            </h1>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              I&#39;m polishing the experience and updating work. Back online
              soon.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2">
                Thank you for your patience
              </span>
              <span>Updates will be live shortly.</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`
        text-foreground antialiased
        ${plusJakarta.variable}
        pb-[calc(var(--bottom-nav-height)+1rem)]
      `}
    >
      <main className="min-h-[100dvh] flex justify-center">
        <div className="w-full max-w-6xl">
          {children}

          <div aria-hidden className="h-[var(--bottom-nav-height)]" />
          <Footer />
        </div>
      </main>
      <UtilityRail/>
      <BottomNav />
    </div>
  );
}
