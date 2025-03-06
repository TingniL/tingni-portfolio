/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiffany:{
          DEFAULT: '#0abab5',
          light: '#6fe7e1',
          dark: '#086a68',
        },
      },
    },
  },
  plugins: [],
}

