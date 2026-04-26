import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REACTable Studios — Logo to souvenir. We build the whole campaign.",
  description:
    "Full-service marketing studio. Brand, web, SEO, GEO, AI-ready content, and physical product — all under one roof. Powered by ten years of REACT.",
  metadataBase: new URL("https://reactablestudios.vercel.app"),
  openGraph: {
    title: "REACTable Studios",
    description:
      "Logo to souvenir. We build the whole campaign.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${jetbrains.variable}`}>
      <body className="bg-rs-white text-rs-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
