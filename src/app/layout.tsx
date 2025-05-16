import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Cursor from "@/components/ui/Cursor";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

// const inter = Inter({
//   variable: "gf_Inter variant0",
//   subsets: ['latin']
// })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shritej's Portfolio",
  description: "Greatest programmer of all time - GPOAT",
};

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
          <Cursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
