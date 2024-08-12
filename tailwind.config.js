/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '22px': '22px',
      },
      textColor: {
        'hover-grayblue': '#274e75'
      },
      colors: {
        'bwgradient': 'rgb(229,231,241)',
      }
		},
  },
  plugins: [],
}
