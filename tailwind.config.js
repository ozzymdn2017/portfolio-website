module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/metal-spike.jpg')",
        'cube-pattern': "url('./assets/gold-cube.jpg')",
        'triangle-pattern': "url('./assets/triangle-path.jpg')",
      }),
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(5px, -5px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
