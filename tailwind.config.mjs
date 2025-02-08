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
      black80: "#767676",
      black120: "#CFD6DF",
      yellow40: "#ECB81C",
      yellow60: "#FCECDC",
      yellow80: "#FDF0CF",
      yellow90: "#FDF8DA",
      yellow100: "#FFFBF0",
      gray100: "#F0EFEC",
      looksRed: "#E06513",
      looksRed60: "#F4CCCC",
      almondMilk: "#F2EDE8",
      almondMilk20: "#F6F3EC",
      almondMilk40: "#FBFAF8",
      notPink: "#EFECFD",
      transparent: "#00000000",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        magic: ["SVN-Radiant Slender"],
      },
      maxWidth: {
        "desktop-content": 896,
        "desktop-content-wide": 1080,
      },
      width: {
        screenshot: "230px",
        "screenshot-md": "270px",
      },
      height: {
        screenshot: "502px",
        "screenshot-md": "584px",
      },
      boxShadow: {
        screenshot: "0px 5px 14px 0px #0000001F",
      },
    },
  },
  plugins: [],
};
