const tickers = [
  { sym: "NABIL",  chg: "+3.42%", up: true  },
  { sym: "NTC",    chg: "+1.15%", up: true  },
  { sym: "UPPER",  chg: "-2.08%", up: false },
  { sym: "HBL",    chg: "+0.74%", up: true  },
  { sym: "ADBL",   chg: "+2.30%", up: true  },
  { sym: "NICA",   chg: "-0.55%", up: false },
  { sym: "PRVU",   chg: "+1.88%", up: true  },
  { sym: "SCB",    chg: "+0.42%", up: true  },
  { sym: "SANIMA", chg: "-1.23%", up: false },
  { sym: "GBIME",  chg: "+3.01%", up: true  },
  { sym: "NLIC",   chg: "+2.15%", up: true  },
  { sym: "CIT",    chg: "-0.89%", up: false },
  { sym: "KBL",    chg: "+1.54%", up: true  },
  { sym: "MEGA",   chg: "+0.77%", up: true  },
  { sym: "JBNL",   chg: "-1.44%", up: false },
];

export default function Ticker() {
  const items = [...tickers, ...tickers];
  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-alt/80 backdrop-blur-sm py-2.5 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-bg-alt to-transparent z-10 pointer-events-none" aria-hidden />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-bg-alt to-transparent z-10 pointer-events-none" aria-hidden />
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 flex-shrink-0 px-5 text-xs font-medium">
            <span className="text-content font-bold tracking-wide">{t.sym}</span>
            <span className={`font-bold ${t.up ? "text-gain" : "text-loss"}`}>
              {t.up ? "▲" : "▼"} {t.chg}
            </span>
            <span className="text-border-strong opacity-40 ml-2 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
