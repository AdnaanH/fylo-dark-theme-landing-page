/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FRaleway: ['Raleway', 'sans-serif'],
        FOpenSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'FDarkBlue1': '#1c2431',
        'FDarkBlue2': '#181f2a',
        'FDarkBlue3': '#0b1523',
        'FDarkBlue4': '#202a3c',
        'FCyan': '#65e2d9',
        'FBlue': '#339ecc',
        'FLightRed': '#ff4242',
      }
    },
  },
  plugins: [],
}