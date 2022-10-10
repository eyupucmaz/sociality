/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-color': '#31363B',
        'icon-bar': '#2A2F33',
        'navigation-bar': '#393D42',
        'location-color': '#F55661',
        'notification': '#73D9C7',
        "main": '#F5F7F8',
        "f-primary": "#959595",
        "f-secondary": "#ACACAC"
      },
      fontFamily: {
        'navigation': 'Raleway, sans-serif'
      }
    },
  },
  plugins: [],
}
