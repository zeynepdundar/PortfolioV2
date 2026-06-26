import Brand from "@/components/layout/Brand";
import Footer from "@/components/layout/Footer";
import SideNav from "@/components/layout/SideNav";
import UtilityRail from "@/components/layout/UtilityRail";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showMaintenance = false;
  const glassBrand =
    "relative inline-flex items-center rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] px-3 py-1 transition-all duration-300 hover:bg-white/10";

  const glassNav =
    "relative inline-flex items-center rounded-full border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.14)] px-4 py-2 transition-all duration-300 hover:bg-white/10";
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
        <div className="w-full max-w-6xl flex flex-col">
          {children}

          <div aria-hidden className="h-[var(--bottom-nav-height)]" />
          <Footer />
        </div>
      </main>
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-6xl px-4 flex justify-between items-center">

          <div className={glassBrand}>
            <Brand />
          </div>

          <div className={glassNav}>
            <SideNav />
          </div>
        </div>
      </div>
      <UtilityRail />
    </div>
  );
}
