/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["Quicksand"],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
