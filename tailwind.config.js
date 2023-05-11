/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    extend: {
      colors: {
        "custom-dark-gray": "#333",
        "custom-orange": "#e87c03",
      },
    },
  },
  plugins: [],
};
