// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#071235",
        bg2: "#0F172A",
        bg3: "#121212",
        primary: "#3182CE",
        secondary: "#111C44",
        amarillo: "#FFA700",
        gris: "#B6B6B6",
        gris2: "767676",
        azul: "#2478FE",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
