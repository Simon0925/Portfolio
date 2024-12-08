/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['FreeMono, monospace'],
        'sans': ['Arial, sans-serif'],
      },
      fontSize: {
        xxs: '0.525rem', 
      },
      height:{
        h600 :"600px",
      },
      minWidth: { 
        boxs: '84px', 
      },
      maxWidth: { 
        boxs: '84px', 
      },
      colors: {
        'modal': 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

