/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#4D4D4D",
        light: "#F5F7FA",
        gray: "#717171",
        lightGray: "#D9DBE1",
      },
      boxShadow: {
        medium: "0px 8px 16px 0px rgba(171, 190, 209, 0.40)",
        light: "0px 2px 4px 0px rgba(171, 190, 209, 0.20)",
      },
    },
  },
  plugins: [],
};
