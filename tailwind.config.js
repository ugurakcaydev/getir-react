module.exports = {
  // mode: "jit",
  // purge: ["./public/**/*.html","./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
