module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          graytext: "#9C9C9C",
          graydark: "#383733",
          gradienttop: "#F3FF07",
          gradientbottom: "#00FFD7",
        },
        azurlane: {
          1: "#7F7FD5",
          2: "#86A8E7",
          3: "#91EAE4",
        },
        gradient: {
          start: "#8A30E5",
          end: "#EA86B1",
          middle: "#B052D1",
        },
        cardbg: {
          black: "#181818",
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
