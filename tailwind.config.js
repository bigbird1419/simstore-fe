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
        colorDark: '#181c31',
        colorLight: '#fff',
        ccc: '#ccc'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

