/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html', './src/**/*.{js,jsx}'],
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        bodyBG: 'rgb(14, 20, 20)',
        primaryFontColor: '#f2f2f2',
        secondaryFontColor: '#bfc1c1',
        redFontColor: '#cf1430',
      },
    },
  },
  plugins: [],
};
