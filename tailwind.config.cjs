/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': 'Inter',
        'dm sans': 'Dm sans'
      }
    },
  },
  plugins: [],
}
