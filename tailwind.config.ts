import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "rs-black": "#000000",
        "rs-white": "#FFFFFF",
        "rs-blue": "#00B0FF",
        "rs-orange": "#FF6B1A",
        "rs-ink": "#0A0A0A",
        "rs-paper": "#FAFAFA",
        "rs-rule": "#1A1A1A",
        "rs-mute": "#6B6B6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
