import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-content font-sans selection:bg-accent/30">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
