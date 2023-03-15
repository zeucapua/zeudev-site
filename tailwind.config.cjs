/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["Quicksand"],
        "generalsans": ["GeneralSans"],
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/typography')],
}
