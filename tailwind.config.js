const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
  ],
  darkMode: 'class', // or 'false' or 'media'
  theme: { // extend the typography plugin with a `light` variant
    extend: {
      colors: {
        brand: {
          light: "#0088CC",
          dark: "#0088FF",
        },
        primary: "#0088CC",
      }
    },
    fontFamily: {
      sans: ['Fira\\ Sans', ...defaultTheme.fontFamily.sans],
      // 'serif': ['Alegreya', ...defaultTheme.fontFamily.serif]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
