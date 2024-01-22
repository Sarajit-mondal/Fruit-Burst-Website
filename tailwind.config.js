/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F85559",
        drak: "#121212",
        light_color: "#ffff",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      // backgroundImage: {
      //   background_img: url(/images/banner1.png),
      // },
    },
  },
  plugins: [require("daisyui")],
};
