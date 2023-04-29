/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          main: "#008DC3",
          dark: "#004E93",
         '600': "#015CAC"
        },
        white: "#FFFDFA",
        gray: "#3D4849",
        "gray-light": "#A1A1A1",
        black: "#101014",
        current: 'currentColor'
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '208': '13rem',
        '176': '11rem',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
