const { createThemes } = require('tw-colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contents/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: { max: '640px' },
      tablet: { max: '768px' },
      laptop: { max: '1280px' },
    },
  },
  plugins: [
    createThemes({
      light: {
        'background-color': '#e5e5e5',
        'primary-color': '#404040',
        'card-background-color': '#d4d4d4',
      },
      dark: {
        'background-color': '#404040',
        'primary-color': '#e5e5e5',
        'card-background-color': '#525252',
      },
    }),
  ],
}
