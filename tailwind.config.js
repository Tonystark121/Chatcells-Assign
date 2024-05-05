export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        
      },
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
      },
      screens: {
        sm:'470px',
        md:'768px',
        semi:'850px',
        lg:'1012px',
      },
      flexGrow: {
        '7': '7',
      },
    },
  },
  plugins: [],
};
