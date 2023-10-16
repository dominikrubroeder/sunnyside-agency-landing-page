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
        app: {
          green: {
            400: "#90D4C6",
            600: "#458D7E",
            900: "#2C7566",
          },
        },
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
      },
      animation: {
        fadeUp: "fadeUp 240ms ease-out forwards",
        fadeUpScale: "fadeUpScale 180ms ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(4%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeUpScale: {
          "0%": { opacity: "0", transform: "translateY(12%) scale(1.04)" },
          "100%": { opacity: "1", transform: "translateY(0%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
