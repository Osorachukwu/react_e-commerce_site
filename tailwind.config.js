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
        sm: {max: "650px"},
        md: {max: "950px"},
        lg: {max: "1220px"},
        xl: {max: "1440px"},
        "2xl": {max: "1680px"}

      }
    },
  },
  plugins: [],
}
git commit -m "Responsive -mobile"
