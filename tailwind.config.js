/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1436px",
      },
      container: {
        padding: {
          DEFAULT: "8px",
          lg: "100px",
        },
        screens: {
          lg: "1436px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        28: "80px",
        72: "19rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        inika: ["var(--font-inika)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        ...defaultColors,
        ...{
          primary: {
            50: "#FAF1E6",
            100: "#FDBD43",
            200: "#F0B040",
            300: "#dd9b27",
            400: "#FDA228",
          },
        },
      },
    },
  },
  plugins: [],
}
