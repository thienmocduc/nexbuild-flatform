const stats = [
  { value: "12", label: "He sinh thai" },
  { value: "$3.8B", label: "Dinh gia muc tieu" },
  { value: "4M+", label: "Lao dong tiem nang" },
  { value: "200+", label: "Nha cung cap" },
  { value: "30s", label: "AI render" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-20 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            border: "1px solid var(--c1)",
            background: "rgba(0,201,167,.08)",
            color: "var(--c1)",
            animation: "fadeup .7s ease both",
            animationDelay: "0s",
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{
              background: "var(--green)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          NexBuild Holdings
        </div>

        {/* Hook text */}
        <p
          className="text-sm md:text-base font-semibold tracking-wide uppercase mb-6"
          style={{
            color: "var(--red)",
            animation: "fadeup .7s ease both",
            animationDelay: ".1s",
          }}
        >
          Nganh xay dung $180 ty — van chay bang Excel va dien thoai
        </p>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8"
          style={{
            animation: "fadeup .7s ease both",
            animationDelay: ".2s",
          }}
        >
          <span className="grad-text block">Xay dung thong minh hon</span>
          <span className="block" style={{ color: "var(--text)" }}>
            trong mot nen tang duy nhat
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-bold mt-3"
            style={{ color: "var(--text3)" }}
          >
            12 he sinh thai &middot; $3.8B &middot; IPO 2029
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
          style={{
            color: "var(--text2)",
            animation: "fadeup .7s ease both",
            animationDelay: ".35s",
          }}
        >
          Tu thiet ke AI, cho vat lieu, tim tho den quan ly cong trinh — tat ca
          ket noi trong mot he thong. Khong manh ghep. Khong phan manh.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            animation: "fadeup .7s ease both",
            animationDelay: ".45s",
          }}
        >
          <a
            href="#ecosystem"
            className="px-8 py-3.5 rounded-full text-white font-semibold text-base transition-transform hover:scale-105"
            style={{ background: "var(--grad)" }}
          >
            Dung thu mien phi
          </a>
          <a
            href="#ecosystem"
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{
              border: "1px solid var(--bdr2)",
              color: "var(--text)",
              background: "transparent",
            }}
          >
            Xem he sinh thai &rarr;
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--bdr2)",
            background: "var(--sur)",
            backdropFilter: "blur(16px)",
            animation: "fadeup .7s ease both",
            animationDelay: ".55s",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--bdr)" : "none",
              }}
            >
              <span
                className="text-2xl md:text-3xl font-black grad-text"
              >
                {s.value}
              </span>
              <span
                className="text-xs md:text-sm mt-1 font-medium"
                style={{ color: "var(--text3)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
