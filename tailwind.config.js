/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#3097d1',
        colorExtraPrimary: '#4e73df',
        colorSecondary: '#ef2d31',
        colorSemiPrimary: '#1d9ce5',
        colorThinPrimary: '#daeeff',
        colorDark: '#181c31',
        colorLight: '#fff',
        colorCcc: '#ccc',
        colorDadada: '#dadada',
        colorWarning: ' #f6c23e',
        colorSuccess: '#1cc88a'
      },
      zIndex: {
        '100': '100',
      },
      fontSize: {
        sml: '0.6rem'
      }
    },
  },
  plugins: [],
}

