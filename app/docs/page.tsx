import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation & Guide — NEPSE Demo Trading",
  description: "Complete guide to using NEPSE Demo Trading — getting started, buying and selling stocks, watchlists, portfolio, analytics, price alerts, and the leaderboard.",
};

const sections = [
  { id: "getting-started", label: "Getting Started" },
  { id: "navigation", label: "Navigating the App" },
  { id: "markets", label: "Markets" },
  { id: "trading", label: "Buying & Selling" },
  { id: "watchlist", label: "Watchlist" },
  { id: "portfolio", label: "Portfolio" },
  { id: "analytics", label: "Analytics" },
  { id: "alerts", label: "Price Alerts" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "settings", label: "Profile & Settings" },
  { id: "faq", label: "FAQ" },
];

const tiers = [
  { name: "Rookie", color: "#7D8590" },
  { name: "Trader", color: "#0ECB81" },
  { name: "Pro", color: "#5B8EF7" },
  { name: "Expert", color: "#F0B90B" },
  { name: "Master", color: "#A855F7" },
];

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-soft border border-accent/25 text-accent font-bold text-sm flex items-center justify-center">
        {n}
      </div>
      <div>
        <h4 className="font-semibold text-content mb-1">{title}</h4>
        <p className="text-sm text-content-dim leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Doc({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-content tracking-tight mb-4 flex items-center gap-3">
        <span className="w-1.5 h-6 rounded-full bg-accent inline-block" />
        {title}
      </h2>
      <div className="text-content-dim leading-relaxed space-y-4 [&_strong]:text-content">{children}</div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg opacity-40 h-64" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* header */}
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Documentation</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-3">
          How to Use NEPSE Demo Trading
        </h1>
        <p className="text-content-dim mb-8 max-w-2xl">
          Everything you need to go from sign-up to climbing the leaderboard. This guide walks through every feature of the app, step by step.
        </p>

        {/* anchor nav */}
        <nav className="flex flex-wrap gap-2 mb-14 p-4 rounded-2xl bg-card border border-border">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface text-content-dim hover:bg-accent-soft hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          <Doc id="getting-started" title="Getting Started">
            <p>Creating your account takes less than a minute.</p>
            <div className="space-y-4 mt-4">
              <Step n="1" title="Register an account">
                Open the app and tap <strong>Sign Up</strong>. Enter your email, choose a username, and set a password.
              </Step>
              <Step n="2" title="Choose your starting balance">
                Pick how much virtual money you want to start with using the slider or the quick presets — <strong>1L</strong> (NPR 1,00,000), <strong>5L</strong>, <strong>10L</strong>, or <strong>50L</strong>. You can also tap <strong>Custom</strong> to type any amount between <strong>NPR 10,000 and NPR 1 Crore</strong>. This is virtual money only — no real funds are ever involved.
              </Step>
              <Step n="3" title="Verify your email">
                We send a verification email (via Brevo). Confirm it to activate your account and you&apos;re ready to trade.
              </Step>
            </div>
          </Doc>

          <Doc id="navigation" title="Navigating the App">
            <p>The app is organized into a bottom navigation bar with five primary destinations:</p>
            <ul className="space-y-2 mt-2">
              <li><strong>Markets</strong> — the NEPSE index, market overview, and top movers.</li>
              <li><strong>Explore</strong> — browse and discover all listed stocks.</li>
              <li><strong>Trade</strong> — the central button to quickly buy or sell.</li>
              <li><strong>Watchlist</strong> — the stocks you&apos;ve saved to track.</li>
              <li><strong>Profile</strong> — your account, portfolio, analytics, alerts, and settings.</li>
            </ul>
          </Doc>

          <Doc id="markets" title="Markets">
            <p>
              The <strong>Markets</strong> tab is your home base. At the top you&apos;ll see the live <strong>NEPSE index</strong> with its current value and daily change, plotted on an interactive chart you can switch between timeframes (1D, 1W, 1M, 1Y).
            </p>
            <p>
              Below the index you&apos;ll find market summaries and <strong>top movers</strong> — the biggest gainers and losers of the day. Tap any stock to open its detail page, where you can view its price history and place a trade.
            </p>
          </Doc>

          <Doc id="trading" title="Buying & Selling Stocks">
            <p>All trades use live NEPSE market prices, so the experience mirrors real trading.</p>
            <h3 className="font-semibold text-content mt-4 mb-2">To buy a stock</h3>
            <div className="space-y-4">
              <Step n="1" title="Find the stock">
                Search for it in <strong>Explore</strong>, tap it in <strong>Markets</strong>, or open it from your <strong>Watchlist</strong>.
              </Step>
              <Step n="2" title="Tap Buy">
                Enter the number of shares (quantity). The app shows the total cost and confirms you have enough virtual balance.
              </Step>
              <Step n="3" title="Confirm">
                Confirm the order. The shares are added to your portfolio instantly and your cash balance updates.
              </Step>
            </div>
            <h3 className="font-semibold text-content mt-6 mb-2">To sell a stock</h3>
            <p>
              Open any stock you hold (from your <strong>Portfolio</strong>), tap <strong>Sell</strong>, enter the quantity, and confirm. Your realized profit or loss is recorded and your cash balance is credited at the current market price.
            </p>
          </Doc>

          <Doc id="watchlist" title="Watchlist">
            <p>
              The <strong>Watchlist</strong> lets you keep an eye on stocks without owning them. Tap the star/bookmark icon on any stock to add it. Your watchlist shows each stock&apos;s current price and daily change at a glance, so you can spot the right moment to buy.
            </p>
          </Doc>

          <Doc id="portfolio" title="Portfolio">
            <p>
              Your <strong>Portfolio</strong> shows everything you own. At the top you&apos;ll see your <strong>total portfolio value</strong> (holdings + remaining cash) along with your overall gain or loss in both rupees and percentage.
            </p>
            <p>
              Each holding lists the quantity, average buy price, current value, and live profit/loss — color-coded <span className="text-gain font-semibold">green</span> for gains and <span className="text-loss font-semibold">red</span> for losses. Tap any holding to view details or sell.
            </p>
          </Doc>

          <Doc id="analytics" title="Analytics">
            <p>
              The <strong>Analytics</strong> screen visualizes your performance over time with interactive charts. Track how your total portfolio value has grown, review your realized vs. unrealized gains, and analyze your full transaction history to learn what&apos;s working and what isn&apos;t.
            </p>
          </Doc>

          <Doc id="alerts" title="Price Alerts">
            <p>
              Never miss a move. In the <strong>Alerts</strong> section you can set a target price on any stock — above or below the current price. When the stock hits your target, the app sends you a <strong>push notification</strong>. It&apos;s a great way to time your entries and exits without staring at the screen all day.
            </p>
          </Doc>

          <Doc id="leaderboard" title="Leaderboard & Tiers">
            <p>
              The <strong>Leaderboard</strong> ranks all users by their portfolio performance, so you can see how you stack up against traders across Nepal. As your performance improves, you progress through tiers:
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tiers.map((t) => (
                <span
                  key={t.name}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border"
                  style={{ color: t.color, borderColor: `${t.color}40`, backgroundColor: `${t.color}14` }}
                >
                  {t.name}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-content-mute">
              Note: rankings reflect virtual performance only and are reset or adjusted periodically to keep competition fair.
            </p>
          </Doc>

          <Doc id="settings" title="Profile & Settings">
            <p>
              From your <strong>Profile</strong> you can access your account details, switch between <strong>light and dark themes</strong>, manage notification preferences, and review your stats. The <strong>Settings</strong> screen also lets you update your account and find links to our Terms and Privacy Policy.
            </p>
          </Doc>

          <Doc id="faq" title="Frequently Asked Questions">
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-content mb-1">Is any real money involved?</h4>
                <p className="text-sm">No. Everything in the app is virtual. You can never deposit, withdraw, or lose real money.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content mb-1">Are the prices real?</h4>
                <p className="text-sm">Yes — trades use live prices from the Nepal Stock Exchange, though data may occasionally be delayed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content mb-1">Can I change my starting balance later?</h4>
                <p className="text-sm">Your starting balance is chosen at registration. Reach out to support if you need your account reset.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content mb-1">Does it cost anything?</h4>
                <p className="text-sm">No. NEPSE Demo Trading is completely free to use.</p>
              </div>
              <div>
                <h4 className="font-semibold text-content mb-1">How do I delete my account?</h4>
                <p className="text-sm">
                  Email{" "}
                  <a href="mailto:support@nepsedemotrading.com" className="text-accent underline">support@nepsedemotrading.com</a>{" "}
                  and we&apos;ll remove your data within 30 days, as described in our{" "}
                  <Link href="/privacy" className="text-accent underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </Doc>
        </div>

        {/* footer CTA */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-content-dim mb-4">Still have questions?</p>
          <a
            href="mailto:support@nepsedemotrading.com"
            className="inline-block px-6 py-3 rounded-xl bg-accent text-bg font-bold hover:bg-accent-deep transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
