/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        frost: '#dfe0dc',
        spring: '#d1d8bd',
        ivy: '#777e5c',
        khaki: '#c7c2ab',
        serpentine: '#283106',
        pebble: '#b0b6bc',
        ghostwhite: '#F9F9F9',
        greygreen: '#E2E6E1',
        shadowgreen: '#454944',
        hovergreen: '#2b2c2d'
      },
    },
  },
};