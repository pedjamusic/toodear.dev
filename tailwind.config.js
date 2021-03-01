// const tailwindcss = require('tailwindcss')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: {
  //   mode: 'layers',
  //   layers: ['base', 'components', 'utilities'],
  //   content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html', './src/**/*.md']
  // },
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.md'
  ],
  darkMode: 'class', // or 'false' or 'media'
  theme: { // extend the typography plugin with a `light` variant
    // colors: {
    //   primary: 'var(--color-primary)',
    //   secondary: 'var(--color-secondary)',
    //   black: 'var(--color-black)',
    //   white: 'var(--color-white)',
    //   gray: 'var(--color-gray)',
    //   lGray: 'var(--color-light-gray)',
    //   danger: 'var(--color-danger)',
    //   success: 'var(--color-success)',
    //   warning: 'var(--color-warning)',
    //   bg: 'var(--color-bg)',
    //   text: 'var(--color-text)',
    //   card: 'var(--color-card)',
    //   footer: 'var(--color-footer)',
    // },
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
        link: 'inset 0 -0.25em 0 0 var(--color-primary)'
      },
    },
    fontFamily: {
      // sans: ['Fira\\ Sans', ...defaultTheme.fontFamily.sans],
      // display: ['Fira\\ Sans', 'sans-serif'],
      // body: ['Alegreya', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  // plugins: [tailwindcss(`./tailwind.config.js`)],
  plugins: []
};
