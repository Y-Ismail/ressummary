/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Lightred: 'hsl(0, 100%, 67%)',
        Orangeyellow:' hsl(39, 100%, 56%)',
        Greenteal: 'hsl(166, 100%, 37%)',
        Cobaltblue: 'hsl(234, 85%, 45%)',
        slateBlue:  'hsl(252, 100%, 67%)',
        royalBlue: 'hsl(241, 81%, 54%)',
        Violetblue: 'hsla(256, 72%, 46%, 1)',
        Persianblue: 'hsla(241, 72%, 46%, 1)'
      },
      fontFamily:{
        Hanken: "Hanken Grotesk"
      }
    },
  },
  plugins: [],
}
