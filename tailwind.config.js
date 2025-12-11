/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#134F4B',
        secondary: '#BF1717',
      },
      fontFamily: {
        sans: ['Alegreya Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
