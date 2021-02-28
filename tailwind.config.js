const tailwindcss = require('tailwindcss')
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.md'
  ],
  darkMode: 'media', // or 'false' or 'class'
  theme: { // extend the typography plugin with a `light` variant
    extend: {
      colors: {
        primary: '#f3f3fa',
        secondary: '#e9e9ef',
        'main-text': '#0d0106',
        'secondary-text': '#454e56',
        accent: '#0088cc',
        'accent-secondary': '#c214cc'
      },
      boxShadow: {
        // link: 'inset 0 -0.3333333333em 0 0 var(--accent)'
        link: 'inset 0 -0.25em 0 0 #0088cc'
      },
    },
    fontFamily: {
      // sans: ['Fira\\ Sans', ...defaultTheme.fontFamily.sans],
      // 'serif': ['Alegreya', ...defaultTheme.fontFamily.serif]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindcss(`./tailwind.config.js`)],
};
