/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto Slab", "serif"],
        paytone: ["Paytone One", "sans-serif"],
      },
      flex: {
        2: "2 2 0%",
        1: "1 1 0%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
   
  ],
};
