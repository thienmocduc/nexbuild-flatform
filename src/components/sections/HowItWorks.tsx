const steps = [
  {
    num: "01",
    title: "Mo ta y tuong",
    desc: "Noi hoac go y tuong thiet ke. AI render hinh anh 3D trong 30 giay.",
    color: "#00C9A7",
    icon: "💡",
  },
  {
    num: "02",
    title: "Chon va dat hang",
    desc: "Chon phuong an ua thich. BOQ tu dong. 1-click dat vat lieu + tho.",
    color: "#0EA5E9",
    icon: "🛒",
  },
  {
    num: "03",
    title: "Quan ly cong trinh",
    desc: "Theo doi tien do, tai chinh, nhan su — tat ca tu 1 dashboard.",
    color: "#6366F1",
    icon: "📊",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              border: "1px solid var(--bdr2)",
              color: "var(--c1)",
              background: "rgba(0,201,167,.08)",
            }}
          >
            CACH HOAT DONG
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            3 buoc.{" "}
            <span className="grad-text">Tu y tuong den cong trinh.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="card-hover relative overflow-hidden rounded-2xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-bdr)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Gradient strip */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                }}
              />

              <div className="relative p-7">
                {/* Watermark number */}
                <span
                  className="absolute top-3 right-4 font-mono font-bold text-[72px] leading-none select-none pointer-events-none"
                  style={{ color: `${s.color}0D` }}
                >
                  {s.num}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${s.color}1A` }}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text2)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
