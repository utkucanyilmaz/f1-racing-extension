/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "f-red": "#e10600",
        "f-dark-blue": "#15151e",
        "f-gray": "#38383f",
        "f-light-gray": "#7d7d81",
        "f-lighter-gray": "#ededed",
        "f-offwhite": "#faf9f6",
        "f-dark-red": "#6a0300",
      },

      fontFamily: {
        titillium: "Titillium Web, Arial, Helvetica, sans-serif",
        poppins: "Poppins, sans-serif",
      },

      backgroundImage: {
        road: "url('/backgrounds/photo-1571826856387-b633b9ebd93d.avif')",
      },
    },
  },
  plugins: [],
};
