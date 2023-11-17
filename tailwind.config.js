/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarayColor: "rgb(255,255,255)",
        secondaryColor: "rgb(238, 238, 239)",
        accentColor: "rgb(194,24,91)",
        mainTextColor: "rgb(133, 133, 133)",
      },
      fontSize: {
        smallText: "1.2rem",
        mediumText: "1.5rem",
         
      },
      //My customized Responsive break-points
      screens: {
        xsm: {max: "400px"},
        sm: {max: "650px"},//mobile
        md: {max: "950px"}, //tablet
        'min-max': {min: "650px", max: "950px"},
        lg: {max: "1220px"}, //smDesktop
        xl: {max: "1500px"},
        "2xl": {max: "1980px"}

      }
    },
  },
  plugins: [],
}

