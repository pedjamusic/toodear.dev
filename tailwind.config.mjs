/* @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // darkMode: 'class', // or 'false' or 'media'
  theme: {
    extend: {
      boxShadow: {
        // link: 'inset 0 -0.3333333333em 0 0 var(--accent)'
        link: "inset 0 -0.1em 0 0 var(--color-primary)",
        "link-hover": "inset 0 -0.25em 0 0 var(--color-secondary)",
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        display: ["Rubik", "sans-serif"],
        body: ["Alegreya", "serif"],
      },
    },
  },
  plugins: [],
};
