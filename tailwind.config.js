/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['"Merienda"', "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
