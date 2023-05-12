/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".search-input::-webkit-search-cancel-button": {
          "-webkit-appearance": "none",
          appearance: "none",
        },
      });
    },
  ],
};
