import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "NEPSE Demo Trading — Practice Stock Trading for Free",
  description:
    "Learn to trade on the Nepal Stock Exchange (NEPSE) without risking real money. Track your portfolio, compete on the leaderboard, and build investing confidence.",
  keywords: ["NEPSE", "paper trading", "Nepal stock market", "demo trading", "virtual trading"],
  openGraph: {
    title: "NEPSE Demo Trading",
    description: "Practice NEPSE stock trading for free — no real money involved.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
