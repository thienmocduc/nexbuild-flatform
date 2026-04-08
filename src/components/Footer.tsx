"use client";

import Link from "next/link";

const products = [
  { label: "NexDesign AI", href: "/products/nexdesign" },
  { label: "NexTalent", href: "/products/nextalent" },
  { label: "NexSupply", href: "/products/nexsupply" },
  { label: "NexERP", href: "/products/nexerp" },
  { label: "NexMarket", href: "/products/nexmarket" },
  { label: "NexMedia", href: "/products/nexmedia" },
];

const company = [
  { label: "Ve NexBuild", href: "/about" },
  { label: "Nha dau tu", href: "/investors" },
  { label: "Tuyen dung", href: "/careers" },
  { label: "Lien he", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const support = [
  { label: "Trung tam tro giup", href: "/help" },
  { label: "Tai lieu API", href: "/docs/api" },
  { label: "Bao mat", href: "/security" },
  { label: "Chinh sach", href: "/privacy" },
  { label: "Dieu khoan", href: "/terms" },
];

const tags = ["B2B", "B2C", "D2C", "SaaS", "AI", "Fintech"];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--c1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted-foreground)")
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "var(--footer-bg)", borderTop: "1px solid var(--bdr)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--c1), var(--c2, #6366f1))",
              }}
            >
              NexBuild
            </span>

            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              NexBuild Holdings xay dung he sinh thai cong nghe toan dien — tu
              thiet ke, nhan su, chuoi cung ung den thi truong so — giup doanh
              nghiep van hanh thong minh hon.
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    border: "1px solid var(--bdr)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <FooterLinkGroup title="San pham" links={products} />

          {/* Column 3 */}
          <FooterLinkGroup title="Cong ty" links={company} />

          {/* Column 4 */}
          <FooterLinkGroup title="Ho tro" links={support} />
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row"
          style={{
            borderTop: "1px solid var(--bdr)",
            color: "var(--muted-foreground)",
          }}
        >
          <p>&copy; 2025 NexBuild Holdings. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="font-medium text-white">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
