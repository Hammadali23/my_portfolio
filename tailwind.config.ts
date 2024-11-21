import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Dark mode ko enable kar diya gaya (class-based approach)
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBackground: "#1a202c", // Example dark mode background color
        darkForeground: "#e2e8f0", // Example dark mode foreground color
      },
    },
  },
  plugins: [],
};

export default config;
