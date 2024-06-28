/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:['Montserrat','sans-serif'],
        DancingScript:["Dancing Script",'sans-serif'],
        lora:['Lora'],
        ptSans:['PT Sans'],
        Inter:['Inter']
      },
      colors: {
        'custom-gold': '#DFC59A',
        'custom-dark-blue': '#164147',
      },
      spacing: {
        '110': '110px',
        '104': '104px',
        '45': '45px',
      },
      fontSize: {
        '40px': '40px',
        '120px': '120px',
        '90px': '90px',
        '7px': '7px',
      },
    },
  },
  plugins: [],
}