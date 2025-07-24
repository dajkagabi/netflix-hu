module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: "#E50914",         
          black: "#141414",
          "dark-gray": "#303030",
          "light-gray": "#757575",
        },
      },
      fontFamily: {
        sans: ["Netflix Sans - sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};