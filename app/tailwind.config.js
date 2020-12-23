const sans = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
]

const serif = [
  'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'
]

module.exports = {
  purge: [
    './www/*.html',
  ],
  extend: {},
  theme: {
    extend: {

    fontFamily: {
      title: ["Komika", ...sans],
      body: ["MulledWineSeason", ...sans],
    },
    }
  },
  variants: {},
  plugins: [],
}
