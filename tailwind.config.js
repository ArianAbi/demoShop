/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#0d0e13",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
