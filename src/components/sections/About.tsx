const VALUES = [
  {
    icon: "\u2B21",
    bg: "#14b8a6",
    title: "Cong nghe dan dat",
    desc: "AI va automation la nen tang de toi uu toan bo quy trinh xay dung.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    bg: "#3b82f6",
    title: "Minh bach va an toan",
    desc: "Escrow, KYC va smart contract bao ve moi giao dich.",
  },
  {
    icon: "\uD83C\uDF0F",
    bg: "#6366f1",
    title: "Tac dong xa hoi",
    desc: "Nang cao chat luong song cho hang trieu lao dong ky thuat Viet Nam.",
  },
];

const MILESTONES = [
  { year: "2025", label: "Seed $2M", color: "#14b8a6" },
  { year: "2026", label: "Series A $15M", color: "#3b82f6" },
  { year: "2027", label: "Series B $50M", color: "#6366f1" },
  { year: "2029", label: "IPO $3.8B", color: "#8b5cf6" },
];

export function About() {
  return (
    <section className="w-full py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section tag */}
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--c1-a, rgba(20,184,166,0.1))",
              color: "var(--c1)",
              border: "1px solid var(--c1)",
            }}
          >
            VE NEXBUILD
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            {/* Vision title */}
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              Xay dung{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--c1), var(--c2, #6366f1))",
                }}
              >
                tuong lai
              </span>{" "}
              cua nganh{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              >
                xay dung Viet Nam
              </span>
            </h2>

            {/* Body text */}
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--text2)" }}
            >
              NexBuild Holdings la he sinh thai cong nghe toan dien, ket noi chu dau tu, nha thau,
              nha cung cap va lao dong ky thuat tren mot nen tang duy nhat. Su menh cua chung toi
              la so hoa toan bo chuoi gia tri nganh xay dung, tu thiet ke AI den quan ly chuoi cung
              ung, giup moi ben lien quan van hanh hieu qua va minh bach hon.
            </p>

            {/* Value cards */}
            <div className="space-y-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 rounded-xl p-4"
                  style={{
                    background: "var(--card-bg, var(--bg2))",
                    border: "1px solid var(--bdr)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg text-white"
                    style={{ background: v.bg }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h4
                      className="text-sm font-bold mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      {v.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text2)" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {/* IPO Roadmap */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "var(--card-bg, var(--bg2))",
                border: "1px solid var(--bdr)",
              }}
            >
              <h3
                className="text-lg font-bold mb-8"
                style={{ color: "var(--text)" }}
              >
                IPO Roadmap
              </h3>

              {/* Timeline */}
              <div className="relative pl-6">
                {/* Gradient bar */}
                <div
                  className="absolute left-[9px] top-2 bottom-2 w-0.5 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #14b8a6, #3b82f6, #6366f1, #8b5cf6)",
                  }}
                />

                <div className="space-y-8">
                  {MILESTONES.map((m) => (
                    <div key={m.year} className="relative flex items-start gap-4">
                      {/* Dot */}
                      <div
                        className="absolute -left-6 top-1 h-5 w-5 rounded-full border-[3px] shrink-0"
                        style={{
                          borderColor: m.color,
                          background: "var(--card-bg, var(--bg2))",
                        }}
                      />
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: m.color }}
                        >
                          {m.year}
                        </span>
                        <p
                          className="text-base font-semibold mt-0.5"
                          style={{ color: "var(--text)" }}
                        >
                          {m.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder note */}
            <blockquote
              className="rounded-2xl p-6 sm:p-8 italic text-sm leading-relaxed"
              style={{
                background: "var(--card-bg, var(--bg2))",
                borderLeft: "4px solid var(--c1)",
                border: "1px solid var(--bdr)",
                borderLeftColor: "var(--c1)",
                borderLeftWidth: "4px",
                color: "var(--text2)",
              }}
            >
              <p className="mb-4">
                &ldquo;Moi dong code la cam ket voi hang trieu nguoi trong nganh xay dung Viet
                Nam. Chung toi khong chi xay phan mem — chung toi xay dung co hoi.&rdquo;
              </p>
              <footer className="not-italic">
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Thien Moc Duc
                </span>
                <span
                  className="block text-xs mt-0.5"
                  style={{ color: "var(--text2)" }}
                >
                  Chairman, NexBuild Holdings
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
