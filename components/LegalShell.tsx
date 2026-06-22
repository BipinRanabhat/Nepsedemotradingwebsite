import Link from "next/link";

/** Shared dark-themed wrapper for the About / Terms / Privacy pages. */
export default function LegalShell({
  title,
  updated,
  children,
  footerLinks,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
  footerLinks: { href: string; label: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg opacity-40 h-64" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-content tracking-tight mb-2">{title}</h1>
        {updated && <p className="text-sm text-content-mute mb-10">Last updated: {updated}</p>}

        <div className="space-y-8 text-content-dim leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-content [&_h2]:mb-3 [&_h3]:font-semibold [&_h3]:text-content [&_h3]:mb-2 [&_strong]:text-content [&_a]:text-accent [&_a]:underline hover:[&_a]:text-accent-deep [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_ul]:mt-2">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-content-mute flex gap-5">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Highlighted callout box (disclaimers). */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent-soft border border-accent/25 rounded-xl p-4 text-sm text-content">
      {children}
    </div>
  );
}
