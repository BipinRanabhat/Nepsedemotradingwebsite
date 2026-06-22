import type { Metadata } from "next";
import LegalShell, { Callout } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "About — NEPSE Demo Trading",
  description: "Learn about NEPSE Demo Trading — what it is, why we built it, and our mission to make stock market education accessible to every Nepali.",
};

export default function AboutPage() {
  return (
    <LegalShell
      title="About NEPSE Demo Trading"
      footerLinks={[
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/privacy", label: "Privacy Policy" },
      ]}
    >
      <p className="text-content-mute text-sm -mt-4">Making NEPSE accessible to every aspiring investor</p>

      <section>
        <h2>What Is NEPSE Demo Trading?</h2>
        <p className="mb-3">
          NEPSE Demo Trading is a free mobile application that lets you practice buying and selling stocks listed on the Nepal Stock Exchange (NEPSE) — without using any real money.
        </p>
        <p>
          You set your own virtual starting balance — anywhere from NPR 10,000 up to 1 Crore — and can trade any NEPSE-listed stock at current market prices. Your portfolio, gains, and losses are tracked in real time so the experience feels as close to the real market as possible.
        </p>
      </section>

      <section>
        <h2>Why We Built It</h2>
        <p className="mb-3">
          The Nepal Stock Exchange can be intimidating for beginners. Many people want to invest but are afraid of losing money before they fully understand how the market works. Existing educational resources are scattered, and there was no dedicated, free simulator for NEPSE specifically.
        </p>
        <p>
          We built NEPSE Demo Trading to close that gap — a safe space where anyone can experiment with different trading strategies, understand how share prices move, and gain confidence before committing real capital.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: make the Nepal Stock Exchange accessible and understandable to every Nepali citizen, regardless of their background or financial knowledge. The stock market should not be exclusive to those who can afford to lose money while learning.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Customizable virtual starting balance (NPR 10,000 – 1 Crore)</li>
          <li>Virtual trading with real NEPSE market prices</li>
          <li>Real-time portfolio tracking with profit/loss breakdown</li>
          <li>Global leaderboard to compete with other virtual traders</li>
          <li>Price alert notifications</li>
          <li>Full transaction history</li>
          <li>Free to use — always</li>
        </ul>
      </section>

      <section>
        <h2>Important Disclaimer</h2>
        <Callout>
          NEPSE Demo Trading is a <strong>paper trading simulator only</strong>. No real money is involved, and nothing within the app constitutes financial advice. Past virtual performance does not guarantee real investment results. Always consult a licensed financial advisor before making real investment decisions.
        </Callout>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? Reach out to us at{" "}
          <a href="mailto:support@nepsedemotrading.com">support@nepsedemotrading.com</a>. We&apos;d love to hear from you.
        </p>
      </section>
    </LegalShell>
  );
}
