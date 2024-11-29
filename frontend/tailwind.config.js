/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        screens: {
          xs: '320px',
          sm: '500px',
          md: '768px',
          lg: '1068px'
        }
      },
    },
    plugins: [],
  }