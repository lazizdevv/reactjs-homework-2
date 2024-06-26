/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", 'sans-serif'],
        sans: ["Open Sans", 'sans-serif'],
      },
      container:{
        padding:"20px",
        center: true,
        screens:{
          lg:"1290px",
        }
      },
      colors:{
        primary:"#3F51B5",
        primarySoft:"#EEF4FF",
        primarText:"#11142D",
        secondary:"#10182C",
        primarText2:"#242424",
        gold:"#FF7F4D",

      }
    },
  },
  plugins: [],
}