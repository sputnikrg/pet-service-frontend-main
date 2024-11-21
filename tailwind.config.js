// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#02bad2',
      },
      fontFamily: {
        "montserrat": "'Montserrat', serif"
      },
      backgroundImage: {
        'main': "url('/src/asets/images/main.jpg')", 
      },
      height: {
        '70vh': '70vh', 
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
