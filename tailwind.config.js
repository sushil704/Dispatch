/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        karobar: {
          blue: '#1E40AF',
          lightBlue: '#2563EB',
          bg: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}