/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary':"#1d24ca",
      'background':"#201658",
      "accent":"#98abee"
      }
    },
  },
  plugins: [],
}

