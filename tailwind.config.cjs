/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue': {
					'main': '#008DC3',
					'dark': '#004E93' 
				},
				'white': '#F5F5FA',
				'gray': '#3D4849',
				'gray-light': '#A1A1A1',
				'black': '#101014'
			  },
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans]
			  }
		},
	},
	plugins: [],
}
