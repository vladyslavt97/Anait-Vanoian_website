// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import your converted React components
import Header from "@/components/header";
import Footer from "@/components/footer";
import LanguageDetector from "@/components/language-detector";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Anait Vanoian",
  description: "Official website of Anait Vanoian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <LanguageDetector />
        {/* ✅ Your Svelte <Header /> becomes a React <Header /> */}
        <Header />

        {/* ✅ This is where each page gets injected (replaces <slot />) */}
        <main>{children}</main>

        {/* ✅ Your Svelte <Footer /> becomes a React <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
