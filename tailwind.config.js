let canvas = {
  accent1: '#6C5DD3',
  accent2: '#0049C6',
  primary: '#2F2F2F',
  secondary: '#6B6B6B',
}
let kirkland = {
  accent1: '#6CC8BF',
  accent2: '#F05B2E'
}

let princeton = {
  accent1: '#C35768',
  accent2: '#232323'
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': canvas.accent1,
        'accent-2': canvas.accent2,
        
        teal: {
          50: '#F0F5F4',
        },
        gray: {
          50: '#F3F4F6',
          100: '#E9E9E9',
          200: '#DEDDDF',
          300: '#CACACA',
          400: canvas.secondary,
          500: '#868686',
          600: '#5D5B5E',
          700: '#393939',
          800: canvas.primary,
        },
      },
    },
  },
  plugins: [],
  // Test
};
