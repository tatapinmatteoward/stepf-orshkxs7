/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        accent: '#7f1d1d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
