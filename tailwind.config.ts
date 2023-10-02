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
    },
  },
  plugins: [],
};
export default config;
