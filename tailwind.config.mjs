/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	// darkMode: 'class', // or 'false' or 'media'
	theme: {
		extend: {
			colors: {
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-black': 'var(--color-black)',
        'color-white': 'var(--color-white)',
        'color-gray': 'var(--color-gray)',
        'color-light-gray': 'var(--color-light-gray)',
        'color-danger': 'var(--color-danger)',
        'color-success': 'var(--color-success)',
        'color-warning': 'var(--color-warning)',
        'color-bg': 'var(--color-white)',
        'color-text': 'var(--color-black)',
        'color-card': 'var(--color-light-gray)',
        'color-footer': 'var(--color-light-gray)'
      },
      boxShadow: {
        // link: 'inset 0 -0.3333333333em 0 0 var(--accent)'
        link: 'inset 0 -0.1em 0 0 var(--color-primary)',
        'link-hover': 'inset 0 -0.25em 0 0 var(--color-secondary)'
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        display: ['Rubik', 'sans-serif'],
        body: ['Alegreya', 'serif']
      }
		},
	},
	plugins: [],
}
