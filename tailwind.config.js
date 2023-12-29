/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Android'],
        tagLine: ['Quicksand'],
        heading: ['Georgia'],
        subHeading: ['Trebuchet-MS'],
        bulletPoints: ['Calibri'],
        bodyPri: ['Roboto'],
        bodySec: ['Montserrat'],
        bodyComp: ['Arial'],
        buttons: ['Roboto'],
      },
      colors: {
        primary: {
          'light': '#e3f2fd',
          'main': '#2196f3',
          'dark': '#0741ad',
        },
        secondary: {
          'light': '#ffe5eb',
          'main': '#FF4081',
          'dark': '#ff1d58',
        },
        complementry: {
          'light': '#fff685',
          'main': '#f37f21',
          'dark': '#ad7307',
        },
        analogus: {
          'light': '#9cf7f1',
          'main': '#00ddff',
          'dark': '#00a189',
        },
        background: {
          'light': '#fafafa',
          'darkLight': '#eeeeee',
          'medium': '#e0e0e0',
          'lightDark': '#9e9e9e',
          'dark': '#424242',
          'lightBlue': '#F3F7FF',
          'black': '#14212d'
        },
        divider: {
          'light': '#fafafa',
          'darkLight': '#eeeeee',
          'medium': '#e0e0e0',
          'lightDark': '#9e9e9e',
          'dark': '#424242',
        },
        text: {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '500': '#9e9e9e',
          '600': '#757575',
          '400': '#bdbdbd',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

