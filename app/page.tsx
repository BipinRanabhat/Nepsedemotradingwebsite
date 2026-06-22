import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEPSE Demo Trading — Practice NEPSE Without Risk",
};

const features = [
  {
    icon: "📈",
    title: "Real NEPSE Data",
    desc: "Trade with live market prices from the Nepal Stock Exchange, so your practice reflects the real market.",
  },
  {
    icon: "💼",
    title: "Portfolio Tracking",
    desc: "Monitor your holdings, gains, and losses in real time with a clean portfolio dashboard.",
  },
  {
    icon: "🏆",
    title: "Leaderboard",
    desc: "Compete with other traders and see where your virtual portfolio ranks among all users.",
  },
  {
    icon: "🔔",
    title: "Price Alerts",
    desc: "Set alerts on stocks and get notified when prices hit your target — just like a real broker app.",
  },
];

const steps = [
  { step: "1", title: "Create a Free Account", desc: "Sign up with your email. No credit card needed — ever." },
  { step: "2", title: "Search & Buy Stocks", desc: "Browse NEPSE-listed companies and buy shares using your virtual NPR 1,00,000 starting balance." },
  { step: "3", title: "Track & Learn", desc: "Watch your portfolio grow or fall, learn from mistakes, and trade your way to the top of the leaderboard." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-6">
            100% Free &bull; No Real Money
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Learn to Trade <span className="text-emerald-600">NEPSE</span> Without Risking a Rupee
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            NEPSE Demo Trading gives you a virtual NPR 1,00,000 to practice buying and selling stocks on the Nepal Stock Exchange. Build confidence before you invest real money.
          </p>
          <div id="download" className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-md"
            >
              Download on Google Play
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-md"
            >
              Download on App Store
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">Coming soon to both platforms</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Everything You Need to Practice</h2>
          <p className="text-center text-gray-500 mb-10">Built specifically for NEPSE — not a generic stock simulator.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Start Practicing?</h2>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          Join thousands of Nepali investors who are learning to trade risk-free. Download the app and start today.
        </p>
        <a
          href="#download"
          className="inline-block px-8 py-3 rounded-xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-colors shadow-lg"
        >
          Get the App — It&apos;s Free
        </a>
        <p className="mt-6 text-xs text-emerald-200">
          By using the app you agree to our{" "}
          <Link href="/terms" className="underline hover:text-white">Terms &amp; Conditions</Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
        </p>
      </section>
    </>
  );
}
