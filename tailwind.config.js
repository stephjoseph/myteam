/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-green': '#014E56',
        'light-coral': '#F67E7E',
        'rapture-blue': '#79C8C7',
        'police-blue': '#2C6269',
        'deep-jungle-green': '#004047',
        'sacramento-state-green': '#012F34',
        'dark-green': '#002529'
      }
    }
  },
  plugins: []
}
