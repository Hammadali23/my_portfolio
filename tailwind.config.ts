import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Apke project ke pages folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App folder (Next.js)
  ],
  darkMode: "class", // Dark mode ko manually "class" ya system-based "media" kar sakte hain
  theme: {
    extend: {
      colors: {
        // Custom colors for light and dark mode
        background: "#f8f9fa", // Light mode background color
        foreground: "#212529", // Light mode text color
        darkBackground: "#1a202c", // Dark mode background color
        darkForeground: "#e2e8f0", // Dark mode text color
      },
    },
  },
  plugins: [], // Optional plugins agar aap add karna chahein
};

export default config;
