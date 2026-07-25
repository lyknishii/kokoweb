import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        koko: {
          bg: "#f4ddd3",
          bgsoft: "#faf0ea",
          surface: "#ffffff",
          text: "#2c2422",
          muted: "#8a746d",
          coral: "#e08a78",
          coralDark: "#c96f5d",
          purple: "#a68bd8",
          purpleDark: "#8e6fc4",
          border: "#e9cfc2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
