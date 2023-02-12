/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				brand: '#25316D',
				'brand-light': '#B7C4CF',
				'brand-text': '#222831',
				'brand-blue': '#364F6B'
			},
			fontFamily: {
				roboto: ['Roboto', 'Arial', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
