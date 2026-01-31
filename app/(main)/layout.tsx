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
  return (
    <div
      className={`
        bg-background text-foreground antialiased
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
