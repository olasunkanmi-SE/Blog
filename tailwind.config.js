// @ts-check
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./layouts/**/*.{js,ts,tsx}",
    "./lib/**/*.{js,ts,tsx}",
    "./data/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        maxWidth: "96rem",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        float: "float 3s ease-in-out infinite",
        slideIn: "slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      maxWidth: {
        "8xl": "96rem",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent)",
        "card-gradient-dark":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent)",
      },
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        mono: ["var(--font-code)", ...fontFamily.mono],
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.amber,
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
}
