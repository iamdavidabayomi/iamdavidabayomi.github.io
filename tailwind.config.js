const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: "#64768e",
          100: "#5c6d82",
          150: "#536377",
          200: "#4b596b",
          250: "#435060",
          300: "#3b4654",
          350: "#33d49",
          400: "#2b333d",
          450: "#232931",
          500: "#1b2026",
          550: "13161a",
          600: "#0b0d0f",
          650: "#020303",
          700: "#22272e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
