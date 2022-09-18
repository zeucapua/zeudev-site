/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			zprimary: "#44adee",
			zsecondary: "#e9498c",
			zaccent: "#fff133"
		}
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
