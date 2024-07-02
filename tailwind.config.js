/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '132': '34rem',
        // Add more custom values as needed
      },
      colors: {
        primarycolor: "#87CEEB",
      },
    },
    fontFamily:{
      display: ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
}
