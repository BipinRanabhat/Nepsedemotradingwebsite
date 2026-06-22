import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="NEPSE Demo Trading" width={28} height={28} className="rounded-md opacity-90" />
            <span className="text-white font-semibold text-sm">NEPSE Demo Trading</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {year} NEPSE Demo Trading. All rights reserved. &nbsp;|&nbsp; For educational and practice purposes only — not real financial advice.
        </div>
      </div>
    </footer>
  );
}
