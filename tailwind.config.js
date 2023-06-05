/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: "#333333",
        },
        red: {
          650: "#e50914",
        },
        orange: {
          550: "#e87c03",
        },
        gray: {
          350: "#6d6d6eb3",
        },
      },
      width: {
        50: "200px",
      },
    },
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
