/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A172A",
        steel: "#11233D",
        sand: "#4DA3FF",
        amber: "#A6D4FF",
        mist: "#F4F7FB",
        slate: "#6D7F9B",
      },
      boxShadow: {
        glow: "0 30px 80px rgba(14, 20, 32, 0.18)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(77, 163, 255, 0.18) 1px, transparent 0)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
