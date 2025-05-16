import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Cursor from "@/components/ui/Cursor";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
// import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CircularScrollProgress from "@/components/ui/CircularScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shritej Reddy — Frontend Engineer",
  description:
    "Crafting beautiful, performant web experiences. Portfolio of Shritej Reddy.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Shritej Reddy — Frontend Engineer",
    description:
      "Portfolio site for Shritej. Projects, design tools, productivity apps, and more.",
    url: "https://yourdomain.com",
    siteName: "Shritej Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shritej Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export function Footer() {
  return (
    <footer className="mt-24 text-center text-muted-foreground text-sm py-8 border-t border-border">
      © {new Date().getFullYear()} Shritej Reddy. Built with Next.js, Tailwind,
      and ✨.
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CircularScrollProgress />
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
