/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        general: ["GeneralSans"],
        quicksand: ["Quicksand"]
      }
    },
  },
}
