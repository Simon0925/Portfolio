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
    
      minWidth: { 
        boxs: '84px', 
      },
      maxWidth: { 
        boxs: '84px', 
      },
    },
  },
  plugins: [],
}

