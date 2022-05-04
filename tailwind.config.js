module.exports = {
  content: [
  ],
  theme: {
    fontFamily: {
      'nunito sans': ['Nunito Sans', 'sans-serif'],
      alegreya: ['Alegreya', 'serif'],
      'open sans': ['Open Sans', 'sans serif'],
      lora: ['Lora', 'serif'],
      oswald: ['oswald', 'sans-serif'],
      lilita: ['Lilita One', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
          animation: {
            wiggle: 'wiggle ls ease-in-out infinite',
          }
        }
      },
    },
  },
  plugins: [],
}
