import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#06b6d4", // cyan-500
          dark: "#0891b2", // cyan-600
          light: "#22d3ee", // cyan-400
        },
        secondary: {
          DEFAULT: "#a855f7", // purple-500
          dark: "#9333ea", // purple-600
          light: "#c084fc", // purple-400
        },
      },
    },
  },
  plugins: [],
};
export default config;
