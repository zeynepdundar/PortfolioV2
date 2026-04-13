// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Zeynep Dündar",
  description: "Software developer portfolio",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider></body>
    </html>
  );
}
