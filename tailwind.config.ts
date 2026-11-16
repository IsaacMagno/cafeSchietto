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
        // Cores da logo: marrom cacau e dourado.
        caffe: {
          espresso: "#34130C",
          mocha: "#5C3D1E",
          latte: "#C8A882",
          cream: "#F5ECD7",
          gold: "#D08F32",
          // Dourado escuro: o único que dá leitura como TEXTO sobre o creme.
          bronze: "#8A5A12",
          dark: "#1E0B06",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
