"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* glass bar */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-bg/85 backdrop-blur-2xl border-white/8 shadow-lg shadow-black/30"
            : "bg-transparent backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative">
              <span className="absolute inset-0 rounded-lg bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-shadow duration-300"
                style={{ boxShadow: "0 0 16px 4px rgba(240,185,11,0.28)" }}
              />
              <Image
                src="/logo.png"
                alt="NEPSE Demo Trading"
                width={34}
                height={34}
                className="relative rounded-lg ring-1 ring-white/10"
              />
            </span>
            <span className="font-bold text-content text-[15px] leading-tight tracking-tight">
              NEPSE <span className="shimmer-text">Demo</span> Trading
            </span>
          </Link>

          {/* Desktop pill nav */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full p-1 transition-all duration-300 ${
              scrolled
                ? "bg-white/[0.04] border border-white/10"
                : "bg-white/[0.03] border border-white/5"
            }`}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-accent/15 text-accent shadow-[inset_0_0_8px_rgba(240,185,11,0.10)]"
                      : "text-content-dim hover:text-content hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="/#download"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-bg text-sm font-bold hover:bg-accent-deep btn-glow"
          >
            Get the App
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 rounded-md text-content-dim hover:text-content"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — smooth collapse via max-h transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-bg-alt/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  active ? "bg-accent/15 text-accent" : "text-content-dim hover:text-content hover:bg-white/5"
                }`}
              >
                {link.label}
                <span className="ml-auto text-content-mute group-hover:text-accent transition-colors">›</span>
              </Link>
            );
          })}
          <a
            href="/#download"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-lg bg-accent text-bg text-sm font-bold text-center hover:bg-accent-deep btn-glow"
          >
            ↓ Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
