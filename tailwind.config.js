/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          0 : "#F2E8DA",
          1 : "#FFBE98",
          2 : "#DCBD9E",
          3 : "#EFCFBA",
          4 : "#FA9A85",
          5 : "#F97272",
          6 : "#DE8286",
          7 : "#FFB2A5",
        }
      }
    },
  },
  plugins: [],
}

