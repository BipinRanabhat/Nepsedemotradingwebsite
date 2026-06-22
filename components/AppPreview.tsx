/**
 * Faux phone screen that mirrors the real app's portfolio view.
 * Uses the same token colors: accent #F0B90B, gain #0ECB81, loss #F6465D.
 */
export default function AppPreview() {
  const holdings = [
    { sym: "NABIL", name: "Nabil Bank", val: "24,850", chg: "+3.42%", up: true },
    { sym: "NTC", name: "Nepal Telecom", val: "18,200", chg: "+1.15%", up: true },
    { sym: "UPPER", name: "Upper Tamakoshi", val: "9,640", chg: "-2.08%", up: false },
    { sym: "HBL", name: "Himalayan Bank", val: "12,300", chg: "+0.74%", up: true },
  ];

  return (
    <div className="relative mx-auto w-[280px] animate-float">
      {/* warm gold glow */}
      <div className="absolute -inset-10 bg-accent/12 blur-3xl rounded-full pointer-events-none" aria-hidden />
      {/* cool blue glow at bottom */}
      <div className="absolute -bottom-8 left-1/4 right-1/4 h-32 bg-info/10 blur-2xl rounded-full pointer-events-none" aria-hidden />

      {/* floating gain chip — top right */}
      <div
        className="absolute -top-4 -right-8 glass-card px-3 py-1.5 flex items-center gap-1.5 animate-float z-20"
        style={{ animationDelay: "0.8s", borderRadius: "999px" }}
      >
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gain opacity-60" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-gain" />
        </span>
        <span className="text-[10px] font-bold text-gain">+8.74%</span>
      </div>

      {/* floating trade chip — bottom left */}
      <div
        className="absolute -bottom-2 -left-10 glass-card px-3 py-1.5 flex items-center gap-1.5 animate-float z-20"
        style={{ animationDelay: "1.6s", borderRadius: "999px" }}
      >
        <span className="text-[10px] font-bold text-accent">NABIL</span>
        <span className="text-[10px] text-content-mute">Bought</span>
      </div>

      {/* phone frame */}
      <div className="relative gradient-border rounded-[2.4rem] bg-bg p-2.5"
           style={{ boxShadow: "0 32px 80px -12px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)" }}>
        {/* Dynamic Island notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#070a0d] rounded-full z-10" />

        {/* screen reflection highlight */}
        <div className="absolute top-2.5 left-2.5 right-2.5 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-[1.9rem] pointer-events-none z-10" aria-hidden />

        <div className="rounded-[1.9rem] overflow-hidden bg-bg-alt">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[9px] text-content-dim font-medium">
            <span>9:41</span>
            <span className="flex gap-1 items-center">
              <span className="w-3 h-1.5 rounded-sm bg-content-dim/60" />
              <span className="w-1 h-1.5 rounded-sm bg-content-dim/60" />
            </span>
          </div>

          {/* portfolio header */}
          <div className="px-5 pt-2">
            <p className="text-[10px] text-content-mute font-medium">Portfolio Value</p>
            <p className="text-2xl font-extrabold text-content tracking-tight tabular-nums mt-0.5">
              NPR 1,08,740
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] font-bold text-gain tabular-nums">+8,740 (8.74%)</span>
              <span className="text-[9px] text-content-mute">All time</span>
            </div>
          </div>

          {/* sparkline */}
          <div className="px-3 mt-3">
            <svg viewBox="0 0 260 70" className="w-full h-16">
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ECB81" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0ECB81" stopOpacity="0" />
                </linearGradient>
                <filter id="line-glow" x="-20%" y="-50%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M0,52 L26,46 L52,50 L78,38 L104,42 L130,28 L156,32 L182,20 L208,24 L234,12 L260,16 L260,70 L0,70 Z"
                fill="url(#spark)"
              />
              <path
                d="M0,52 L26,46 L52,50 L78,38 L104,42 L130,28 L156,32 L182,20 L208,24 L234,12 L260,16"
                fill="none"
                stroke="#0ECB81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#line-glow)"
              />
            </svg>
          </div>

          {/* timeframe chips */}
          <div className="flex gap-1.5 px-4 mt-1">
            {["1D", "1W", "1M", "1Y"].map((t, i) => (
              <span
                key={t}
                className={`text-[9px] font-bold px-2.5 py-1 rounded-md ${
                  i === 2 ? "bg-accent text-bg" : "bg-surface text-content-mute"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* holdings */}
          <div className="px-4 mt-4 pb-5">
            <p className="text-[10px] text-content-mute font-semibold uppercase tracking-wider mb-2">Holdings</p>
            <div className="space-y-2">
              {holdings.map((h) => (
                <div key={h.sym} className="flex items-center justify-between bg-card rounded-xl px-3 py-2 border border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center text-[9px] font-bold text-accent">
                      {h.sym.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-content leading-none">{h.sym}</p>
                      <p className="text-[8.5px] text-content-mute mt-0.5">{h.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold text-content tabular-nums leading-none">{h.val}</p>
                    <p className={`text-[9px] font-bold tabular-nums mt-0.5 ${h.up ? "text-gain" : "text-loss"}`}>
                      {h.chg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
