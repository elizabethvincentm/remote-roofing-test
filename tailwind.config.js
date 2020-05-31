const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    container: {
      center: 'true',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Josefin Slab', ...defaultTheme.fontFamily.serif],
      },

      colors: {
        transparent: 'transparent',

        black: '#000',
        'black-25': 'rgba(0, 0, 0, 0.25)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'black-75': 'rgba(0, 0, 0, 0.75)',

        white: '#fff',
        'white-5': 'rgba(255, 255, 255, 0.05)',
        'white-10': 'rgba(255, 255, 255, 0.10)',
        'white-15': 'rgba(255, 255, 255, 0.15)',
        'white-20': 'rgba(255, 255, 255, 0.20)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-30': 'rgba(255, 255, 255, 0.30)',
        'white-35': 'rgba(255, 255, 255, 0.35)',
        'white-40': 'rgba(255, 255, 255, 0.40)',
        'white-45': 'rgba(255, 255, 255, 0.25)',
        'white-50': 'rgba(255, 255, 255, 0.50)',
        'white-55': 'rgba(255, 255, 255, 0.55)',
        'white-60': 'rgba(255, 255, 255, 0.60)',
        'white-65': 'rgba(255, 255, 255, 0.65)',
        'white-70': 'rgba(255, 255, 255, 0.70)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
        'white-80': 'rgba(255, 255, 255, 0.80)',
        'white-85': 'rgba(255, 255, 255, 0.85)',
        'white-90': 'rgba(255, 255, 255, 0.90)',
        'white-95': 'rgba(255, 255, 255, 0.95)',

        error: '#d0021b',
        validation: '#01bb56',

        body: '#383b3a',
        'body-dark': '#303231',
        'body-light': '#727575',
        'body-lighter': '#c1c0c2',
        'body-lightest': '#ebebeb',
        'body-border': '#bfbfbf',

        primary: '#017CFF',
        'primary-dark': '#bc353b',
        'primary-light': '#0597F2',
        'primary-lighter': '#ff9993',
        'primary-lightest': '#ffcbc3',

        secondary: '#404040',
        'secondary-dark': '#000000',
        'secondary-light': '#4e4345',
        'secondary-lighter': ' #7a6e70',
        'secondary-lightest': ' #a99c9e',

        tertiary: '#E8E2BC',
        'tertiary-dark': '#b6b08c',
        'tertiary-light': '#ffffef',
      },
    },
  },
  variants: {},
  plugins: [],
}
