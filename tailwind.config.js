/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        image: "1 / 1",
      },
      colors: {
        primary: "#00AFF0",
        secondary: "#008CC0",
      },
    },
  },
  plugins: [],
};
