import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexBuild Holdings — He sinh thai xay dung thong minh",
  description:
    "NexBuild Holdings — 12 he sinh thai, 1 nen tang. Thiet ke AI, cho vat lieu, tim tho, quan ly cong trinh — tat ca trong mot.",
  keywords: "NexBuild, xay dung, AI, thiet ke noi that, vat lieu, tho xay dung, ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${notoSansMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {/* Background orbs */}
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />

          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
