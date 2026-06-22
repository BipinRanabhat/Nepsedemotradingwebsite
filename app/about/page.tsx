import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — NEPSE Demo Trading",
  description: "Learn about NEPSE Demo Trading — what it is, why we built it, and our mission to make stock market education accessible to every Nepali.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">About NEPSE Demo Trading</h1>
      <p className="text-gray-500 text-sm mb-10">Making NEPSE accessible to every aspiring investor</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">What Is NEPSE Demo Trading?</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          NEPSE Demo Trading is a free mobile application that lets you practice buying and selling stocks listed on the Nepal Stock Exchange (NEPSE) — without using any real money.
        </p>
        <p className="text-gray-600 leading-relaxed">
          You start with a virtual balance of NPR 1,00,000 and can trade any NEPSE-listed stock at current market prices. Your portfolio, gains, and losses are tracked in real time so the experience feels as close to the real market as possible.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Why We Built It</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          The Nepal Stock Exchange can be intimidating for beginners. Many people want to invest but are afraid of losing money before they fully understand how the market works. Existing educational resources are scattered, and there was no dedicated, free simulator for NEPSE specifically.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We built NEPSE Demo Trading to close that gap — a safe space where anyone can experiment with different trading strategies, understand how share prices move, and gain confidence before committing real capital.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is simple: make the Nepal Stock Exchange accessible and understandable to every Nepali citizen, regardless of their background or financial knowledge. The stock market should not be exclusive to those who can afford to lose money while learning.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Virtual trading with real NEPSE market prices</li>
          <li>Real-time portfolio tracking with profit/loss breakdown</li>
          <li>Global leaderboard to compete with other virtual traders</li>
          <li>Price alert notifications</li>
          <li>Full transaction history</li>
          <li>Free to use — always</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Important Disclaimer</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 leading-relaxed">
          NEPSE Demo Trading is a <strong>paper trading simulator only</strong>. No real money is involved, and nothing within the app constitutes financial advice. Past virtual performance does not guarantee real investment results. Always consult a licensed financial advisor before making real investment decisions.
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Have questions, suggestions, or feedback? Reach out to us at{" "}
          <a href="mailto:support@nepsedemotrade.com" className="text-emerald-600 underline hover:text-emerald-700">
            support@nepsedemotrade.com
          </a>
          . We&apos;d love to hear from you.
        </p>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 flex gap-4">
        <Link href="/terms" className="hover:text-emerald-600">Terms &amp; Conditions</Link>
        <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link>
      </div>
    </div>
  );
}
