import type { Metadata } from "next";
import Link from "next/link";
import AppPreview from "@/components/AppPreview";
import Ticker from "@/components/Ticker";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "NEPSE Demo Trading — Practice NEPSE Without Risk",
};

const stats = [
  { value: "You Choose", label: "Set your own virtual balance" },
  { value: "Live",       label: "Real NEPSE market prices" },
  { value: "100%",       label: "Free, forever" },
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
  { step: "02", title: "Search & Buy Stocks",        desc: "Browse NEPSE-listed companies and invest your virtual balance across any stocks you like." },
  { step: "03", title: "Track & Climb",              desc: "Monitor your portfolio, learn from every trade, and rise up the leaderboard." },
];

const leaderboard = [
  { rank: 1, name: "Bikash T.",  city: "Kathmandu", ret: "+42.8%", val: "1,42,800" },
  { rank: 2, name: "Sujata R.", city: "Pokhara",    ret: "+38.1%", val: "1,38,100" },
  { rank: 3, name: "Dipak M.",  city: "Lalitpur",   ret: "+31.5%", val: "1,31,500" },
  { rank: 4, name: "Anita K.",  city: "Bhaktapur",  ret: "+27.2%", val: "1,27,200" },
  { rank: 5, name: "Roshan S.", city: "Chitwan",    ret: "+24.9%", val: "1,24,900" },
];

const rankColors   = ["text-accent", "text-gray-400", "text-orange-400", "text-content-mute", "text-content-mute"];
const avatarColors = [
  "bg-accent/20 text-accent",
  "bg-info/20 text-info",
  "bg-gain/20 text-gain",
  "bg-purple-500/20 text-purple-400",
  "bg-pink-500/20 text-pink-400",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden glow-accent noise">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(600px circle at 10% 60%, rgba(91,142,247,0.06), transparent 70%)" }}
          aria-hidden
        />
        {/* slow-drifting background orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/6 blur-3xl pointer-events-none animate-orb" aria-hidden />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-info/5 blur-3xl pointer-events-none animate-orb-2" aria-hidden />
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 rounded-full bg-gain/4 blur-3xl pointer-events-none animate-orb-3" aria-hidden />

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
              {/* Google Play CTA */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl btn-primary btn-glow"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.18 23.76c.39.22.83.24 1.24.04L18.36 12 4.42.2C4.01 0 3.57.02 3.18.24 2.41.68 2 1.52 2 2.5v19c0 .98.41 1.82 1.18 2.26z"/>
                  <path d="M20.2 10.3l-2.83-1.6L13.9 12l3.47 3.3 2.83-1.6c.8-.45.8-1.55 0-2z" opacity=".7"/>
                  <path d="M4.42.2 13.9 12 4.42 23.8 18.36 12z" opacity=".4"/>
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-semibold opacity-70 tracking-wide mb-0.5">GET IT ON</p>
                  <p className="text-sm font-extrabold tracking-tight">Google Play</p>
                </div>
                <svg
                  className="w-3.5 h-3.5 ml-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </a>

              {/* App Store — coming soon */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl btn-outline btn-glow cursor-default"
                tabIndex={-1}
                aria-disabled="true"
              >
                <svg className="w-5 h-5 shrink-0 opacity-60" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-semibold tracking-wide mb-0.5">COMING SOON</p>
                  <p className="text-sm font-extrabold tracking-tight">App Store</p>
                </div>
              </a>
            </div>
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

          <div className="flex justify-center lg:justify-end">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ── NEPSE Stock Ticker ── */}
      <Ticker />

      {/* ── Stats band ── */}
      <section className="py-2 px-4 sm:px-6">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="glass-card gradient-border py-8 px-4">
            <div className="grid grid-cols-3">
              {stats.map((s, i) => (
                <div key={s.label} className="relative text-center px-2">
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-linear-to-b from-transparent via-border-strong to-transparent" aria-hidden />
                  )}
                  <p className="text-xl sm:text-2xl font-extrabold shimmer-text tracking-tight">{s.value}</p>
                  <p className="text-[11px] sm:text-xs text-content-mute mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Why NEPSE Demo Trading</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-3">
              Everything You Need to Practice
            </h2>
            <p className="text-content-dim max-w-xl mx-auto">
              Purpose-built for the Nepal Stock Exchange — not a generic stock simulator.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal
                key={f.title}
                delay={i * 70}
                className="group p-6 rounded-2xl glass-card glass-card-hover gradient-border"
              >
                <div className="relative w-12 h-12 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="absolute inset-0 rounded-xl bg-accent/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                  <span className="relative">{f.icon}</span>
                </div>
                <h3 className="font-bold text-content text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-content-dim leading-relaxed">{f.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-4 sm:px-6 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Get Started in Minutes</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight">How It Works</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="hidden sm:block absolute top-10 left-[36%] right-[36%] h-px border-t-2 border-dashed border-border-strong pointer-events-none" aria-hidden />
            {steps.map((s, i) => (
              <ScrollReveal
                key={s.step}
                delay={i * 110}
                className="glass-card gradient-border p-6 text-center sm:text-left"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  {i + 1}
                </div>
                <span className="shimmer-text text-5xl font-extrabold block mb-2 select-none opacity-25">{s.step}</span>
                <h3 className="font-bold text-content text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-content-dim leading-relaxed">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leaderboard preview ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Live Competition</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-3">
              Top Traders This Month
            </h2>
            <p className="text-content-dim max-w-md mx-auto">
              Compete with investors nationwide. Rise to #1 with smart trades.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140} className="glass-card gradient-border overflow-hidden">
            <div className="flex items-center px-5 py-3 border-b border-border text-[11px] text-content-mute font-semibold uppercase tracking-wider">
              <span className="w-10 shrink-0">Rank</span>
              <span className="flex-1">Trader</span>
              <span className="w-28 text-right hidden sm:block">Portfolio (NPR)</span>
              <span className="w-20 text-right">Return</span>
            </div>

            {leaderboard.map((t, i) => (
              <div
                key={t.rank}
                className={`flex items-center px-5 py-3.5 border-b border-border/60 last:border-0 transition-colors hover:bg-white/[0.025] ${i === 0 ? "bg-accent/[0.03]" : ""}`}
              >
                <span className={`w-10 shrink-0 text-sm font-extrabold tabular-nums ${rankColors[i]}`}>
                  #{t.rank}
                </span>
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${avatarColors[i]}`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-content leading-none">{t.name}</p>
                    <p className="text-[11px] text-content-mute mt-0.5">{t.city}</p>
                  </div>
                </div>
                <span className="w-28 text-right text-sm text-content-dim tabular-nums hidden sm:block">{t.val}</span>
                <span className="w-20 text-right text-sm font-bold text-gain tabular-nums">{t.ret}</span>
              </div>
            ))}

            <div className="px-5 py-4 text-center bg-bg-alt/60">
              <p className="text-xs text-content-mute">
                Your current rank:{" "}
                <span className="text-accent font-bold">#1,247</span>
                {" · "}
                <a href="#download" className="text-accent underline hover:text-accent-deep transition-colors">
                  Download the app to climb →
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6">
        <ScrollReveal
          className="max-w-4xl mx-auto rounded-3xl glass-card gradient-border animate-pulse-glow p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 glow-accent opacity-70 pointer-events-none" aria-hidden />
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
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-primary btn-glow text-base font-extrabold"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download the App — It&apos;s Free
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
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
        </ScrollReveal>
      </section>
    </>
  );
}
