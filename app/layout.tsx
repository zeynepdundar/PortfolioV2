import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="color-salmon-500 text-neutral-900 antialiased">
        <Header />
        <div className="h-20 w-40 bg-salmon rounded-xl text-background p-4">Tailwind v4 works</div>

        <Footer />
      </body>
    </html>
  );
}
