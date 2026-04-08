import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        nex: {
          teal: "#00C9A7",
          blue: "#0EA5E9",
          indigo: "#6366F1",
          violet: "#A855F7",
          gold: "#C9A84C",
          red: "#EF4444",
          green: "#22C55E",
          amber: "#F59E0B",
          orange: "#FB923C",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", '"Noto Sans"', "sans-serif"],
        mono: ["var(--font-noto-mono)", '"Noto Sans Mono"', "monospace"],
      },
      borderRadius: {
        nex: "14px",
      },
      maxWidth: {
        wrap: "1280px",
      },
      animation: {
        drift: "drift 14s ease-in-out infinite alternate",
        fadeup: "fadeup 0.8s ease both",
        pulse2: "pl 2s infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "40%": { transform: "translate(28px,-38px) scale(1.07)" },
          "70%": { transform: "translate(-18px,26px) scale(.94)" },
          "100%": { transform: "translate(12px,18px) scale(1.04)" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pl: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
