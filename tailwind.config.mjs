/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000",
      black20: "#393939",
      black120: "#CFD6DF",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
