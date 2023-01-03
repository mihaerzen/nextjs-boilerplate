// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
