/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      black10: "#001820",
      black20: "#232323",
      black30: "#393939",
      black60: "#525252",
      black120: "#CFD6DF",
      yellow40: "#ECB81C",
      yellow100: "#FFFBF0",
      gray100: "#F0EFEC",
      looksRed: "#E06513",
      almondMilk: "#F6F3EC",
      almondMilk20: "#FBFAF8",
      saffron: "#F4CCCC",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        magic: ["Are You Serious"],
      },
      maxWidth: {
        "desktop-content": 896,
        "desktop-content-wide": 1048,
      },
    },
  },
  plugins: [],
};
