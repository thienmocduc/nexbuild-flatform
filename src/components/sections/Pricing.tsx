const TIERS = [
  {
    name: "NexDesign AI",
    color: "#14b8a6",
    model: "SaaS",
    price: "Mien phi / 299K/thang",
    unit: "3 luot free, Pro khong gioi han",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "NexTalent",
    color: "#3b82f6",
    model: "Commission",
    price: "8-12% / booking",
    unit: "Phi tren gia tri thanh cong",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "NexSupply",
    color: "#f59e0b",
    model: "GMV",
    price: "2-4% GMV",
    unit: "Hoa hong tren don hang",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h2l3 12h12l3-9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="24" r="2" fill="currentColor" />
        <circle cx="20" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "NexERP",
    color: "#6366f1",
    model: "SaaS",
    price: "500K-2M/thang",
    unit: "Theo quy mo du an",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="12" x2="25" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="12" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Pricing() {
  return (
    <section className="w-full py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--c1-a, rgba(20,184,166,0.1))",
              color: "var(--c1)",
              border: "1px solid var(--c1)",
            }}
          >
            BANG GIA
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Mo hinh gia minh bach
          </h2>
        </div>

        {/* Tier grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card-bg, var(--bg2))",
                border: "1px solid var(--bdr)",
              }}
            >
              {/* Colored strip top */}
              <div className="h-1.5 w-full" style={{ background: tier.color }} />

              <div className="p-6 flex flex-col items-start gap-4">
                {/* Icon */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${tier.color}15`, color: tier.color }}
                >
                  {tier.icon}
                </div>

                {/* Name */}
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {tier.name}
                </h3>

                {/* Model tag */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    background: `${tier.color}15`,
                    color: tier.color,
                  }}
                >
                  {tier.model}
                </span>

                {/* Price */}
                <p
                  className="text-2xl font-extrabold leading-tight"
                  style={{ color: tier.color }}
                >
                  {tier.price}
                </p>

                {/* Unit description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text2)" }}
                >
                  {tier.unit}
                </p>

                {/* Feature tag */}
                <span
                  className="mt-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                  style={{
                    background: `${tier.color}10`,
                    color: tier.color,
                    border: `1px solid ${tier.color}30`,
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: tier.color }} />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
