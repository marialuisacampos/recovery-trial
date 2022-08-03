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
          100: "#91D8DF", //mais claro
          200: "#34B8C4", //mais escuro
        },
        gray: {
          100: "#ECECEC", //background
          200: "#525151", //text
          300: "#FFFFFF", //white
          400: "#F5F5F5", //cinza mais claro
          600: "#D7D6D6", //stroke
        },
      },
    },
  },
  plugins: [],
};
