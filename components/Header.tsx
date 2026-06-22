"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* glass bar */}
      <div className="bg-bg/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative">
              <span className="absolute inset-0 rounded-lg bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/logo.png"
                alt="NEPSE Demo Trading"
                width={34}
                height={34}
                className="relative rounded-lg ring-1 ring-white/10"
              />
            </span>
            <span className="font-bold text-content text-[15px] leading-tight tracking-tight">
              NEPSE <span className="gradient-text">Demo</span> Trading
            </span>
          </Link>

          {/* Desktop pill nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-accent/15 text-accent"
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
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-bg text-sm font-bold hover:bg-accent-deep transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get the App
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 rounded-md text-content-dim hover:text-content"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current mb-1 transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-alt/95 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  active ? "bg-accent/15 text-accent" : "text-content-dim hover:text-content hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/#download"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-lg bg-accent text-bg text-sm font-bold text-center hover:bg-accent-deep"
          >
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}
