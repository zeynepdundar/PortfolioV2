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

          <main className="flex-1">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
