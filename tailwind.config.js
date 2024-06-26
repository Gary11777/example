/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/views/**/*.blade.php"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('tailwindcss/forms')
  ],
}
