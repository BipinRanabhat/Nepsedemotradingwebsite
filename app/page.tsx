import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AppPreview from "@/components/AppPreview";

export const metadata: Metadata = {
  title: "NEPSE Demo Trading — Practice NEPSE Without Risk",
};

const stats = [
  { value: "You Choose", label: "Set your own virtual balance" },
  { value: "Live", label: "Real NEPSE market prices" },
  { value: "100%", label: "Free, forever" },
];

const features = [
  {
    icon: "📈",
    title: "Real NEPSE Data",
    desc: "Trade with live market prices from the Nepal Stock Exchange. Your practice mirrors the real market, tick for tick.",
  },
  {
    icon: "💼",
    title: "Live Portfolio Tracking",
    desc: "Watch your holdings, gains, and losses update in real time with a clean, professional dashboard.",
  },
  {
    icon: "🏆",
    title: "Global Leaderboard",
    desc: "Compete with traders across Nepal and climb the ranks as your virtual portfolio grows.",
  },
  {
    icon: "🔔",
    title: "Smart Price Alerts",
    desc: "Set alerts on any stock and get notified the moment prices hit your target — just like a pro broker app.",
  },
  {
    icon: "📊",
    title: "Detailed Analytics",
    desc: "Visualize performance with interactive charts and break down every gain and loss in your history.",
  },
  {
    icon: "🔒",
    title: "Zero Risk",
    desc: "No real money, ever. Make mistakes, test strategies, and learn — without losing a single rupee.",
  },
];

const steps = [
  { step: "01", title: "Sign Up & Set Your Balance", desc: "Register with your email and choose your virtual starting balance — from NPR 10,000 up to 1 Crore. No credit card, ever." },
  { step: "02", title: "Search & Buy Stocks", desc: "Browse NEPSE-listed companies and invest your virtual balance across any stocks you like." },
  { step: "03", title: "Track & Climb", desc: "Monitor your portfolio, learn from every trade, and rise up the leaderboard." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden glow-accent">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              100% Free · No Real Money
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-content leading-[1.08] tracking-tight mb-5">
              Master <span className="gradient-text">NEPSE</span> Trading.
              <br className="hidden sm:block" /> Risk Absolutely Nothing.
            </h1>
            <p className="text-base sm:text-lg text-content-dim max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Choose your own virtual starting balance — anywhere from NPR 10,000 up to 1 Crore — and practice buying and selling real Nepal Stock Exchange stocks. Build confidence and skill before you invest a single real rupee.
            </p>
            <div id="download" className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
              <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-100">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={194}
                  height={75}
                  className="h-[58px] w-auto"
                  priority
                />
              </a>
            </div>
            <p className="mt-4 text-xs text-content-mute">Coming soon to the Google Play Store</p>
          </div>

          {/* phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="border-y border-border bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-3 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-2">
              <p className="text-xl sm:text-2xl font-extrabold gradient-text tracking-tight">{s.value}</p>
              <p className="text-[11px] sm:text-xs text-content-mute mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Why NEPSE Demo Trading</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-3">
              Everything You Need to Practice
            </h2>
            <p className="text-content-dim max-w-xl mx-auto">
              Purpose-built for the Nepal Stock Exchange — not a generic stock simulator.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-content text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-content-dim leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-4 sm:px-6 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Get Started in Minutes</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center sm:text-left">
                <span className="text-5xl font-extrabold text-surface block mb-3 select-none">{s.step}</span>
                <h3 className="font-bold text-content text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-content-dim leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-card to-bg-alt border border-border-strong p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 glow-accent opacity-80" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-4">
              Ready to Start Trading <span className="gradient-text">Risk-Free?</span>
            </h2>
            <p className="text-content-dim mb-8 max-w-xl mx-auto">
              Join Nepali investors who are mastering the stock market without putting real money on the line.
            </p>
            <a
              href="#download"
              className="inline-block px-8 py-3.5 rounded-xl bg-accent text-bg font-bold hover:bg-accent-deep transition-colors shadow-lg shadow-accent/20"
            >
              Download the App — It&apos;s Free
            </a>
            <p className="mt-6 text-xs text-content-mute">
              By using the app you agree to our{" "}
              <Link href="/terms" className="text-content-dim underline hover:text-accent">Terms</Link>{" "}
              &amp;{" "}
              <Link href="/privacy" className="text-content-dim underline hover:text-accent">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
