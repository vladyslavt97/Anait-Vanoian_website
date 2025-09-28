// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your converted React components
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
