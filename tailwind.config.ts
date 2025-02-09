import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "d-black": "#060707",
        "d-orange": "#EF9854",
        "d-blue": "#BAE1EB",
        "d-purple": "#C8B6E8",
        "d-pink": "#ED98DC",
        "d-green": "#D9E8B6",
        "d-nude": "#FFF8F0",
      },
    },
  },
  plugins: [],
} satisfies Config;
