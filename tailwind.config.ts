import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      keyframes: {
        "slide-in-out": {
          "0%": { transform: "translate(100%, 0)", opacity: "0" },
          "10%": { transform: "translate(0, 0)", opacity: "1" },
          "90%": { transform: "translate(0, 0)", opacity: "1" },
          "100%": { transform: "translate(100%, 0)", opacity: "0" },
        },
      },
      animation: {
        "slide-in-out": "slide-in-out 6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
