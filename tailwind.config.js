/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/**/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        matterRegular: ['Matter Regular'],
        matterSemibold: ['Matter Semibold'],
        matterHeavy: ['Matter Heavy'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
