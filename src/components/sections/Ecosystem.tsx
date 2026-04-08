"use client";

import Link from "next/link";

const modules = [
  {
    id: 1,
    name: "NexMarket",
    slug: "market",
    desc: "Cho xay dung",
    tag: "B2B/B2C/D2C",
    color: "#C9A84C",
    icon: "🏪",
    price: "Free — Pro tu 490K/thang",
    key: true,
  },
  {
    id: 2,
    name: "NexDesign AI",
    slug: "design",
    desc: "AI Thiet ke noi that",
    tag: "AI SaaS",
    color: "#00C9A7",
    icon: "🎨",
    price: "Free 5 render — Pro tu 299K/thang",
  },
  {
    id: 3,
    name: "NexTalent",
    slug: "talent",
    desc: "Tim tho, dat tho",
    tag: "Marketplace",
    color: "#0EA5E9",
    icon: "👷",
    price: "Free — Hoa hong 5%",
  },
  {
    id: 4,
    name: "NexSupply",
    slug: "supply",
    desc: "Vat lieu B2B",
    tag: "B2B",
    color: "#F59E0B",
    icon: "📦",
    price: "Free listing — Pro tu 390K/thang",
  },
  {
    id: 5,
    name: "NexERP",
    slug: "erp",
    desc: "Quan ly du an",
    tag: "SaaS",
    color: "#6366F1",
    icon: "📊",
    price: "Tu 690K/thang",
  },
  {
    id: 6,
    name: "NexMedia",
    slug: "media",
    desc: "Quang cao B2B",
    tag: "AdTech",
    color: "#A855F7",
    icon: "📢",
    price: "Tu 1.5M/chien dich",
  },
  {
    id: 7,
    name: "NexFinance",
    slug: "finance",
    desc: "Tai chinh xay dung",
    tag: "Fintech",
    color: "#22C55E",
    icon: "💰",
    price: "Phi tu van mien phi",
  },
  {
    id: 8,
    name: "NexAffiliates",
    slug: "affiliates",
    desc: "Hoa hong",
    tag: "Affiliate",
    color: "#FB923C",
    icon: "🤝",
    price: "Mien phi — Hoa hong 3-8%",
  },
  {
    id: 9,
    name: "NexAcademy",
    slug: "academy",
    desc: "Dao tao",
    tag: "EdTech",
    color: "#6366F1",
    icon: "🎓",
    price: "Free — Premium tu 199K/thang",
  },
  {
    id: 10,
    name: "NexAgent AI",
    slug: "agent",
    desc: "Tu dong hoa AI",
    tag: "AI",
    color: "#A855F7",
    icon: "🤖",
    price: "Tu 990K/thang",
  },
  {
    id: 11,
    name: "NexConnect",
    slug: "connect",
    desc: "Tich hop",
    tag: "Integration",
    color: "#0EA5E9",
    icon: "🔗",
    price: "Free 3 ket noi — Pro tu 290K/thang",
  },
  {
    id: 12,
    name: "NexAccounting",
    slug: "accounting",
    desc: "Ke toan",
    tag: "SaaS",
    color: "#22C55E",
    icon: "📋",
    price: "Tu 490K/thang",
  },
];

export function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
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
            HE SINH THAI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            12 module.{" "}
            <span className="grad-text">1 nen tang.</span>{" "}
            Khong manh ghep.
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "var(--text2)" }}>
            Moi module hoat dong doc lap nhung ket noi lien mach — du lieu chay
            xuyen suot, khong can tich hop thu cong.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m) => (
            <Link
              key={m.slug}
              href={`/ecosystem/${m.slug}`}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl"
              style={{
                background: "var(--card-bg)",
                border: m.key
                  ? `1.5px solid ${m.color}44`
                  : "1px solid var(--card-bdr)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Colored strip */}
              <div
                className="h-[2px] w-full"
                style={{ background: m.color }}
              />

              <div className="flex flex-col flex-1 p-5">
                {/* Module number */}
                <span
                  className="font-mono text-xs mb-3"
                  style={{ color: "var(--text3)" }}
                >
                  MODULE {String(m.id).padStart(2, "0")}
                </span>

                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
                  style={{ background: `${m.color}1A` }}
                >
                  {m.icon}
                </div>

                {/* Name */}
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {m.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-3 flex-1"
                  style={{ color: "var(--text2)" }}
                >
                  {m.desc}
                </p>

                {/* Tag */}
                <span
                  className="inline-block self-start rounded-full px-2.5 py-0.5 text-[11px] font-medium mb-3"
                  style={{
                    background: `${m.color}18`,
                    color: m.color,
                    border: `1px solid ${m.color}33`,
                  }}
                >
                  {m.tag}
                </span>

                {/* Price */}
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--text3)" }}
                >
                  {m.price}
                </p>

                {/* CTA */}
                <span
                  className="inline-flex items-center justify-center w-full rounded-lg py-2 text-sm font-semibold transition-opacity duration-200 group-hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${m.color}, ${m.color}CC)`,
                    color: "#fff",
                  }}
                >
                  Tim hieu &rarr;
                </span>
              </div>

              {/* KEY module highlight ring */}
              {m.key && (
                <div
                  className="absolute -top-px -left-px -right-px -bottom-px rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${m.color}22, inset 0 0 30px ${m.color}08`,
                  }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
