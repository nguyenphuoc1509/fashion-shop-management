const colors = require("tailwindcss/colors")

module.exports = {
  content:["./src/**/*.{js,jsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}