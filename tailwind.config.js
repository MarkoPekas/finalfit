module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'sexy': '#66F',
      },
      backgroundColor: {
        'sexy': '#121212',
        'sexyblue': '#66f',
        'layer': '#242424',
        'lightopacity': 'rgba(255, 255, 255, .6)',
        'darkopacity': 'rgba(0, 0, 0, .6)',
      },
      transitionDelay: {
        '0': '0ms',
        '3000': '3000ms',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
