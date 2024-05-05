/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lmao.html", "./src/**/*.{js}"],
  theme: {
    extend: {},
    screens: {
      xs: "479px",
      s: "767px",
      m: "991px",
      l: "1440px",
    },
  },
  plugins: [],
}

