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
      
    },
  },
  plugins: [],
}

