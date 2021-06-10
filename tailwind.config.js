module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/metal-spike.jpg')",
        'cube-pattern': "url('./assets/gold-cube.jpg')",
        'triangle-pattern': "url('./assets/triangle-path.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
