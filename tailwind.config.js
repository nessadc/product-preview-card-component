/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
    },
    extend: {
      colors: {
        cream: 'hsl(30, 38%, 92%)',
        darkCyan: 'hsl(158, 36%, 37%)',
        darkerCyan: 'hsl(158, 36%, 28%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayBlue: 'hsl(228, 12%, 48%)',
      },
    },
  },
  plugins: [],
};
