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

const staggerClass = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6"] as const;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden glow-accent noise">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
        {/* secondary cool-blue glow for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(600px circle at 10% 60%, rgba(91,142,247,0.06), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* copy */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold mb-6">
              <span className="relative flex w-1.5 h-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-accent" />
              </span>
              100% Free · No Real Money
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-content leading-[1.08] tracking-tight mb-5">
              Master <span className="shimmer-text">NEPSE</span> Trading.
              <br className="hidden sm:block" /> Risk Absolutely Nothing.
            </h1>
            <p className="text-base sm:text-lg text-content-dim max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Choose your own virtual starting balance — anywhere from NPR 10,000 up to 1 Crore — and practice buying and selling real Nepal Stock Exchange stocks. Build confidence and skill before you invest a single real rupee.
            </p>
            <div id="download" className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
              <a href="#" className="inline-block btn-glow rounded-xl active:scale-100">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={194}
                  height={75}
                  className="h-14.5 w-auto"
                  priority
                />
              </a>
            </div>
            {/* micro-trust badges */}
            <div className="mt-5 flex items-center gap-4 justify-center lg:justify-start flex-wrap">
              <span className="flex items-center gap-1.5 text-[11px] text-content-mute">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                No real money
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-content-mute">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-content-mute">
                <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Free forever
              </span>
            </div>
          </div>

          {/* phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="py-2 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card gradient-border py-8 px-4">
            <div className="grid grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`relative text-center px-2 animate-fade-in-up ${staggerClass[i * 2]}`}
                >
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-linear-to-b from-transparent via-border-strong to-transparent" aria-hidden />
                  )}
                  <p className="text-xl sm:text-2xl font-extrabold shimmer-text tracking-tight">{s.value}</p>
                  <p className="text-[11px] sm:text-xs text-content-mute mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Why NEPSE Demo Trading</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-3">
              Everything You Need to Practice
            </h2>
            <p className="text-content-dim max-w-xl mx-auto">
              Purpose-built for the Nepal Stock Exchange — not a generic stock simulator.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group p-6 rounded-2xl glass-card glass-card-hover gradient-border animate-fade-in-up ${staggerClass[i]}`}
              >
                <div className="relative w-12 h-12 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {/* bloom on hover */}
                  <span className="absolute inset-0 rounded-xl bg-accent/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                  <span className="relative">{f.icon}</span>
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
          <div className="text-center mb-14 animate-fade-in-up">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Get Started in Minutes</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {/* desktop connector line */}
            <div className="hidden sm:block absolute top-10 left-[36%] right-[36%] h-px border-t-2 border-dashed border-border-strong pointer-events-none" aria-hidden />
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`glass-card gradient-border p-6 text-center sm:text-left animate-fade-in-up ${staggerClass[i]}`}
              >
                {/* small numbered badge */}
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  {i + 1}
                </div>
                {/* ghost large number */}
                <span className="shimmer-text text-5xl font-extrabold block mb-2 select-none opacity-25">{s.step}</span>
                <h3 className="font-bold text-content text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-content-dim leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl glass-card gradient-border animate-pulse-glow p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 glow-accent opacity-70 pointer-events-none" aria-hidden />
          {/* decorative bottom-right blob */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-accent/8 blur-3xl pointer-events-none" aria-hidden />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-4">
              Ready to Start Trading <span className="shimmer-text">Risk-Free?</span>
            </h2>
            <p className="text-content-dim mb-8 max-w-xl mx-auto">
              Join Nepali investors who are mastering the stock market without putting real money on the line.
            </p>
            <a
              href="#download"
              className="inline-block px-8 py-3.5 rounded-xl bg-accent text-bg font-bold hover:bg-accent-deep btn-glow"
            >
              Download the App — It&apos;s Free
            </a>
            {/* social proof */}
            <p className="mt-5 text-[11px] text-content-mute italic">
              <span className="text-accent not-italic">★★★★★</span>{" "}
              &ldquo;Finally a NEPSE simulator that uses real prices!&rdquo; — Bikram, Kathmandu
            </p>
            <p className="mt-4 text-xs text-content-mute">
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
