module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: {
          50: "#f1f2f7",
          100: "#030a64",
          200: "#45729c",
        },
        gray: {
          100: "#b2c2ce",
          200: "#3e5461",
        },
        green: "#04985d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
