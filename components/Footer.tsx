import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg-alt border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.png" alt="NEPSE Demo Trading" width={30} height={30} className="rounded-md ring-1 ring-border-strong" />
              <span className="text-content font-bold text-sm">NEPSE Demo Trading</span>
            </div>
            <p className="text-content-mute text-xs leading-relaxed max-w-xs">
              The risk-free way to learn stock trading on the Nepal Stock Exchange. Practice with virtual money, master the market.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-content text-xs font-semibold uppercase tracking-wider mb-3">Pages</h4>
            <nav className="flex flex-col gap-2 text-sm text-content-dim">
              <Link href="/" className="hover:text-accent transition-colors w-fit">Home</Link>
              <Link href="/docs" className="hover:text-accent transition-colors w-fit">Documentation</Link>
              <Link href="/about" className="hover:text-accent transition-colors w-fit">About</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-content text-xs font-semibold uppercase tracking-wider mb-3">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm text-content-dim">
              <Link href="/terms" className="hover:text-accent transition-colors w-fit">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-accent transition-colors w-fit">Privacy Policy</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-mute">
          <span>&copy; {year} NEPSE Demo Trading. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            For educational purposes only — not financial advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
