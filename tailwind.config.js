const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        lac: {
          blue: "#09628E",
          darkblue: "#002447",
        },
      },
      backgroundImage: {},
      borderWidth: ["first"],
    },
  },
  plugins: [],
}
