import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-bg-alt border-t border-border mt-auto overflow-hidden">
      {/* golden aurora peeking over the top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="NEPSE Demo Trading"
                width={30}
                height={30}
                className="rounded-md ring-1 ring-border-strong"
              />
              <span className="shimmer-text font-bold text-sm">NEPSE Demo Trading</span>
            </div>
            <p className="text-content-mute text-xs leading-relaxed max-w-xs mb-3">
              The risk-free way to learn stock trading on the Nepal Stock Exchange. Practice with virtual money, master the market.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-content-mute">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gain opacity-50" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-gain" />
              </span>
              Coming soon to Google Play
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-content text-xs font-semibold uppercase tracking-wider mb-3">Pages</h4>
            <nav className="flex flex-col gap-2 text-sm text-content-dim">
              {[
                { href: "/", label: "Home" },
                { href: "/docs", label: "Documentation" },
                { href: "/about", label: "About" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative w-fit hover:text-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-content text-xs font-semibold uppercase tracking-wider mb-3">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm text-content-dim">
              {[
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/delete-account", label: "Delete Account" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative w-fit hover:text-accent transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10">
          <div className="h-px bg-linear-to-r from-transparent via-border-strong to-transparent mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-mute">
            <span>&copy; {year} NEPSE Demo Trading. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              For educational purposes only — not financial advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
