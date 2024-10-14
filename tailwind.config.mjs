
/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#031720",
        "txt-primary": "#21E3EF",
        "txt-secondary": '#fff'
      },
    },
  },
  plugins: [animations],
};
