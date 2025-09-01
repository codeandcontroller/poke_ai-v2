/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          blue: '#3B82F6',
          yellow: '#FCD34D',
          red: '#EF4444'
        }
      }
    },
  },
  plugins: [],
}