import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
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
