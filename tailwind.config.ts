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
        mainPurple: "#40196D",
        lightPurple: "#EFF1FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        vazirmatn: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
