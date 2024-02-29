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
      gridTemplateColumns: {
        content: '43rem 43rem 43rem',
        tabletContent: '23rem 23rem 23rem',
        mobileContent: '11rem 11rem 11rem',
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.5s ease-in',
      },
      keyframes: {
        modalFadeIn: {
          '0%': {
            opacity: 0,
          },
          '70%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
