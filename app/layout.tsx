import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import "./globals.css";

const plusJakarta = localFont({
  src: [
    {
      path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
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
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex flex-1 justify-center">
            <div className="w-full max-w-6xl">
              {children}
              <Footer />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
