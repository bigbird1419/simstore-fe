/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#3097d1',
        colorSecondary: '#ef2d31',
        colorSemiPrimary: '#1d9ce5',
        colorThinPrimary: '#daeeff',
        colorDark: '#181c31',
        colorLight: '#fff',
        colorCcc: '#ccc',
        colorDadada: '#dadada'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

