const problems = [
  {
    stat: "68%",
    title: "Cong trinh tre han",
    desc: "Phan lon du an xay dung bi tre tien do vi phu thuoc lien lac thu cong, thieu du lieu thoi gian thuc va khong co he thong canh bao som.",
  },
  {
    stat: "35%",
    title: "Chi phi phat sinh",
    desc: "Chi phi thuc te vuot ngan sach trung binh 35% do bao gia khong chinh xac, gia vat lieu bien dong va thieu kiem soat mua sam.",
  },
  {
    stat: "85%",
    title: "Van hanh thu cong",
    desc: "Doanh nghiep xay dung van quan ly cong trinh bang dien thoai, so tay va Excel — khong dong bo, de sai sot, khong the mo rong.",
  },
];

export function Problem() {
  return (
    <section className="section relative" id="problem">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              border: "1px solid var(--c1)",
              color: "var(--c1)",
              background: "rgba(0,201,167,.08)",
              animation: "fadeup .7s ease both",
            }}
          >
            Van de
          </span>
          <div className="gradline" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-5"
            style={{
              color: "var(--text)",
              animation: "fadeup .7s ease both",
              animationDelay: ".1s",
            }}
          >
            Nganh xay dung $180B —{" "}
            <span style={{ color: "var(--red)" }}>
              van chay nhu 20 nam truoc
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            style={{
              color: "var(--text2)",
              animation: "fadeup .7s ease both",
              animationDelay: ".2s",
            }}
          >
            Trong khi moi nganh deu so hoa, xay dung van la mot trong nhung nganh
            cham chuyen doi nhat. Du lieu phan manh, van hanh roi rac, va chi phi
            that thoat khong kiem soat.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-2xl p-8 card-hover strip-top overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-bdr)",
                borderTop: "3px solid var(--red)",
                animation: "fadeup .7s ease both",
                animationDelay: `${0.15 + i * 0.12}s`,
              }}
            >
              <span
                className="block text-5xl md:text-6xl font-black mb-3"
                style={{ color: "var(--red)" }}
              >
                {p.stat}
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text3)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge section */}
        <div
          className="rounded-2xl text-center px-8 py-12 md:py-16"
          style={{
            background: "linear-gradient(135deg, rgba(0,201,167,.12), rgba(14,165,233,.12))",
            border: "1px solid rgba(0,201,167,.22)",
            animation: "fadeup .7s ease both",
            animationDelay: ".55s",
          }}
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl font-black leading-snug mb-4"
            style={{ color: "var(--c1)" }}
          >
            NexBuild khong fix tung van de —
            <br className="hidden sm:block" />
            NexBuild thay the ca cach van hanh.
          </p>
          <p
            className="max-w-xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ color: "var(--text2)" }}
          >
            Mot nen tang duy nhat thay the hang chuc cong cu roi rac. Tu thiet ke,
            vat lieu, nhan cong den tai chinh — tat ca dong bo, thoi gian thuc.
          </p>
        </div>
      </div>
    </section>
  );
}
