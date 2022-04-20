const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      'colors': {
        'primary': '#3427fe',
        'secondary': '#fe4b27',
      },
      'fontFamily': {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};