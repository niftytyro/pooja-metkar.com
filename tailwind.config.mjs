/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000",
      black10: "#001820",
      black20: "#393939",
      black120: "#CFD6DF",
      yellow40: "#ECB81C",
      yellow100: "#FFFBF0",
      gray100: "#F0EFEC",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
