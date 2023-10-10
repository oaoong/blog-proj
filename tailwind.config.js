const { createThemes } = require('tw-colors')
const { spacing } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    screens: {
      mobile: { max: '640px' },
      tablet: { max: '768px' },
      laptop: { max: '1280px' },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            //...
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            '--tw-prose-bullets': '#404040',
            '--tw-prose-invert-bullets': '#e5e5e5',
            '--tw-prose-quotes': '#404040',
            '--tw-prose-invert-quotes': '#e5e5e5',
            '--tw-prose-quote-borders': theme('colors.yellow.500'),
            '--tw-prose-invert-quote-borders': theme('colors.yellow.500'),
            '--tw-prose-captions': '#404040',
            '--tw-prose-invert-captions': '#e5e5e5',
          },
        },
      }),
    },
  },
  plugins: [
    createThemes({
      light: {
        'background-color': '#e5e5e5',
        'primary-color': '#404040',
        'card-background-color': '#d4d4d4',
        'secondary-color': '#d4d4d4',
      },
      dark: {
        'background-color': '#404040',
        'primary-color': '#e5e5e5',
        'card-background-color': '#525252',
        'secondary-color': '#525252',
      },
    }),
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      addUtilities(
        {
          '.no-scrollbar': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
            /* Firefox */
            'scrollbar-width': 'none',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
        ['responsive'],
      )
    },
  ],
}
