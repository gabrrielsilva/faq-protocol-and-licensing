/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/**/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
