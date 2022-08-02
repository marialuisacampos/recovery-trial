/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        pink: {
          100: "#FF8484",
        },
        blue: {
          100: "#34B8C4",
          200: "#87CFD6", //azul mais claro
        },
        gray: {
          100: "#ECECEC", //background
          200: "#525151", //text
          300: "#FFFFFF", //white
        },
      },
    },
  },
  plugins: [],
};
