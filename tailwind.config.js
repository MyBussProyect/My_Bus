/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'intense-red': '#fd2121', // Rojo Intenso
        'cian': '#00FFFF', // Azul Cian
        'cream': '#FFF9E6', // Crema
        'blue-light': '#87CEEB', // Azul Claro
        'dark-red': '#8B0000', // Rojo Oscuro
        'soft-red': '#FF6B6B', // Rojo Suave
        'deep-blue': '#00008B', // Azul Profundo
        'vibrant-blue': '#00BFFF', // Azul Claro Vibrante
        'olive-green': '#556B2F', // Verde Oliva
        'soft-green': '#32CD32', // Verde Lima Suave
        'teal-green': '#008080', // Verde Azulado
        'modern-gray': "#333333" // Gris Oscuro
      },
      borderColor: {
        'intense-red': '#fd2121', // Rojo Intenso
        'cian': '#00FFFF', // Azul Cian
        'cream': '#FFF9E6', // Crema
        'blue-light': '#87CEEB', // Azul Claro
        'dark-red': '#8B0000', // Rojo Oscuro
        'soft-red': '#FF6B6B', // Rojo Suave
        'deep-blue': '#00008B', // Azul Profundo
        'vibrant-blue': '#00BFFF', // Azul Claro Vibrante
        'olive-green': '#556B2F', // Verde Oliva
        'soft-green': '#32CD32', // Verde Lima Suave
        'teal-green': '#008080', // Verde Azulado
      }
      ,
      textColor: {
        'black': '#000000', // Negro
        'white': '#FFFFFF', // Blanco
        'dark-gray': '#333333', // Gris Oscuro
        'navy': '#000080', // Azul Marino Oscuro
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      dropShadow: {
        'text': '0rem 0rem 1rem #000',
      },
    },
  },
  plugins: [],
}