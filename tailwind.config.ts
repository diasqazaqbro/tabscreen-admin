import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3153CA",
        secondary: "#F1F1F1",
        text: "#343434",
      },
    },
  },
  plugins: [],
};
export default config;
