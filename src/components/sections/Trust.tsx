const METRICS = [
  { value: "12", label: "He sinh thai ket noi", color: "#14b8a6" },
  { value: "$3.8B", label: "Dinh gia muc tieu 2029", color: "#3b82f6" },
  { value: "4M+", label: "Lao dong ky thuat VN", color: "#6366f1" },
  { value: "200+", label: "Nha cung cap da xac thuc", color: "#8b5cf6" },
];

const GUARANTEES = [
  { icon: "\uD83D\uDD12", text: "Escrow bao ve 100%" },
  { icon: "\u26A1", text: "AI render 30 giay" },
  { icon: "\uD83D\uDCCB", text: "BOQ tu dong" },
  { icon: "\uD83D\uDEE1\uFE0F", text: "OWASP compliant" },
];

export function Trust() {
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
            CON SO
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Duoc tin tuong boi
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {METRICS.map((m) => (
            <div
              key={m.value}
              className="relative rounded-2xl p-6 sm:p-8 text-center overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card-bg, var(--bg2))",
                border: "1px solid var(--bdr)",
              }}
            >
              {/* Top strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: m.color }}
              />

              <p
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color: m.color }}
              >
                {m.value}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text2)" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee bar */}
        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: "var(--card-bg, var(--bg2))",
            border: "1px solid var(--bdr)",
          }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {GUARANTEES.map((g) => (
              <div
                key={g.text}
                className="flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                style={{ color: "var(--text)" }}
              >
                <span className="text-lg">{g.icon}</span>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
