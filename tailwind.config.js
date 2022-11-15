/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darker: "#151515",
        green: "#4EE1A0",
        dark: "#242424",
        gray: "#D9D9D9",
        red: "#FF6F5B",
      },
    },
  },
  plugins: [],
}