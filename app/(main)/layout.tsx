import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import UtilityRail from "@/components/layout/UtilityRail";


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
        `}
      >
        <main className="min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#11161f] to-[#0b0c10] text-white">
          <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
            <h1 className="text-display sm:text-6xl font-semibold">
              Site Refresh in Progress
            </h1>
            <p className="mt-4 text-body-lg text-white/70">
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
