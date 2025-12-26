export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%": { transform: "rotate(-40deg)" },
          "100%": { transform: "rotate(-50deg)" },
        },
      },
      animation: {
        swing: "swing 0.5s ease-in-out infinite alternate",
      },
    },
  },
};
