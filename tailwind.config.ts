import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A76D2",
        gray: "#868E99",
        secondary: "#111",
        white: "#FFF",
      },
      backgroundColor: {
        primary: "#1A76D2",
      },
    },
  },
  plugins: [],
};
export default config;
