/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomatoBlaze: "#FF5733",
        saffronGlow: "#FFB833",
        oliveSprig: "#28A745",
        chiliSpice: "#D32F2F",
        creamyWhite: "#FFFFFF",
        charcoalSlate: "#333333",
        softGray: "#666666",
        lightMist: "#F8F9FA",
        lemonZest: "#FFCA28",
        skyBlue: "#0288D1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
