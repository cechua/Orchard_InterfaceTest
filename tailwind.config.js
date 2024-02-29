/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html', './src/**/*.{js,jsx}'],
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        openSansFont: ['Open Sans', 'sans-serif'],
      },
      colors: {
        bodyBG: 'rgb(14, 20, 20)',
        primaryFontColor: '#ebe5e5d1',
        secondaryFontColor: '#bfc1c1',
        redFontColor: '#cf1430',
      },
    },
  },
  plugins: [],
};
