/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundColor:{
          'primary' : '#fd3932',
          'hover' : '#555455'
        },
        fontFamily: {
          'dancing-script': ['Dancing Script', 'cursive'],
        }
    },
  },
  plugins: [],
}