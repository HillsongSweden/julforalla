/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Viaoda Libre', ...defaultTheme.fontFamily.serif],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
      screens: {
        ...defaultTheme.screens,
        sm: '480px',
        md: '680px'
      },
      colors: {
        primary: {
          50: '#FDFEFE',
          100: '#D9E2E3',
          200: '#B5C6C7',
          300: '#93A9AA',
          400: '#718A8C',
          default: '#516B6D',
          500: '#485C5E',
          600: '#3F4E4F',
          700: '#364041',
          800: '#2C3333',
          900: '#1A1D1E'
        },
        accent: {
          100: '#F8D5D2',
          200: '#EDB1A8',
          300: '#DF8E7E',
          400: '#CD6E58',
          500: '#B85038',
          default: '#9F341C',
          600: '#843220',
          700: '#6B2F21',
          800: '#542A21',
          900: '#3F241E'
        },
        cream: {
          default: '#EFE5C7'
        },
        gray: {
          ...defaultTheme.colors.gray,
          default: '#666666',
          weak: '#909090'
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      },
      spacing: {
        '7': '1.75rem',
        '14': '3.75rem'
      }
    },
    rotate: {
      '-18': '-18deg'
    },
    backgroundImage: theme => ({
      mistletoe: "url('/img/mistletoe-opt.png')"
    }),
    boxShadow: {
      ...defaultTheme.boxShadow,
      outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['btn', 'icon']
    }
  }
}
