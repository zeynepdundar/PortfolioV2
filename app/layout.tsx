// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import Providers from "@/components/Providers";


export const metadata = {
  title: "Zeynep Dündar",
  description: "Software developer portfolio",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.svg",
  },
};

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <html
        lang="en"
        className={`${satoshi.variable}`}
        suppressHydrationWarning
      >
        <body className="font-sans antialiased">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
