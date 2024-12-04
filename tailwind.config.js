/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        softPink:'#FF2E65',
        goldenSaffron:'#F7D22D',

      },
      fontFamily:{
        body:['Montserrat']
      },
    },
    
  },
  plugins: [],
}

