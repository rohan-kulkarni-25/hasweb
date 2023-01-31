/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1400px' },
      'lg': { 'max': '1200px' },
      'md': { 'max': '1000px' },
      'sm': { 'max': '750px' },
      //
    },
    extend: {
      colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
'yellow-sea': {
  DEFAULT: '#FFB000',
  50: '#FFE9B8',
  100: '#FFE3A3',
  200: '#FFD67A',
  300: '#FFC952',
  400: '#FFBD29',
  500: '#FFB000',
  600: '#C78900',
  700: '#8F6300',
  800: '#573C00',
  900: '#1F1500'
},
    }
    },
      fontFamily: {

    batangas: ["Batangas_Bold_700"],
  },
  },
  plugins: [],
}
