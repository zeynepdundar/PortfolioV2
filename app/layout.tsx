import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import localFont from "next/font/local";
import "./globals.css";

const plusJakarta = localFont({
  src: [
    { path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf", weight: "400" },
    { path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.ttf", weight: "500" },
    { path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground antialiased ${plusJakarta.variable}`}
      >
        {/* Main content */}
        <main className="min-h-[100dvh] flex justify-center">
          <div className="w-full max-w-6xl">
            {children}

            {/* Scroll buffer for floating navigation */}
            <div aria-hidden className="h-[var(--bottom-nav-height)]" />

            <Footer />
          </div>
        </main>

        {/* Overlay layers for bottom navigation */}
        <>
          {/* Fade layer (visual separation, not a bar) */}
          <div
            aria-hidden
            className="
              pointer-events-none
              fixed inset-x-0 bottom-0 z-40
              h-36
              bg-gradient-to-t
              from-background/95
              via-background/70
              to-transparent
            "
          />

          {/* Hairline anchor */}
          <div
            aria-hidden
            className="
              pointer-events-none
              fixed inset-x-0 z-45
              bottom-20
              h-px
              bg-foreground/5
            "
          />
        </>

        {/* Primary navigation (ambient) */}
        <BottomNav />
      </body>
    </html>
  );
}
