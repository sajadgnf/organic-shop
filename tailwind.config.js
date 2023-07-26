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
        72: "133px",
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
            light: "#FAF1E6",
            main: "#FDBD43",
            dark: "#E6A32F",
          },
          secondary: {
            light: "#F6F6F6",
            main: "#E9EEF1",
            dark: "#d6d8da",
          },
        },
      },
      boxShadow: {
        sm: "0px 1px 3px rgba(42, 42, 42, 0.15)",
        md: "0px 0.953125px 2.859375px rgba(42, 42, 42, 0.15)",
      },
    },
  },
  plugins: [],
}
