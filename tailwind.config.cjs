/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        nav: "#B7BDB8",
        primary: "#C3C9C5",
        polaroid: "#FDFDFD",
      },
      boxShadow: {
        polaroid: "0px 2px 4px rgba(49, 54, 50, 0.49)",
      },
      colors: {
        darkest: "#313632",
        "green-darkest": "#919A92",
        "green-dark": "#AAB1AA",
        green: "#B7BDB8",
      },
      fontFamily: {
        bell: ["'Bellissima Script Pro'", "cursive"],
        mack: ["p22-mackinac-pro", "serif"],
        "gothic-w": ["tablet-gothic-wide", "sans-serif"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};
