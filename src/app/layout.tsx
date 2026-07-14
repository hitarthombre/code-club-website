import type { Metadata } from "next";
import { Inter, Outfit, EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-title",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Hack Club - Where teens make cool stuff",
  description: "Hack Club is the world's largest nonprofit movement of teenagers making cool projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${ebGaramond.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}


