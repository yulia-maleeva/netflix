/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: "#333333",
        },
        orange: {
          550: "#e87c03",
        },
      },
    },
  },
  plugins: [],
};
