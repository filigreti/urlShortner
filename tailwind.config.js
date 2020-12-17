module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  variants: {
    borderWidth: [
      "responsive",
      "last",
      "hover",
      "focus",
      "group-hover",
      "first",
      "last"
    ],
    backgroundColor: [
      "responsive",
      "active",
      "focus",
      "hover",
      "first",
      "last",
      "even"
    ],
    gradientColorStops: ["responsive", "hover", "focus", "active"]
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    boxShadow: {
      cardShadow: "0px 0px 16px rgba(228, 231, 232, 0.45)",
      mainShadow:
        "-4px -4px 8px rgba(241, 239, 239, 0.25), 4px 4px 8px rgba(228, 231, 232, 0.31)"
    },
    fontFamily: {
      body: ["Montserrat"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    extend: {
      colors: {
        "dsaPurple-100": "#EEECF6",
        "dsaPurple-200": "#5242A2",
        "dsaTurk-100": "#EAF8F9",
        "dsaTurk-200": "#2EBDC2",
        "dsaGreen-100": "#EBF9ED",
        "dsaGreen-200": "#32C34A",
        "dsaBlue-100": "#E9F3F8",
        "dsaBlue-200": "#3997C5",
        "dsaBlue-300": "#3f75ff",
        "dsaOcean-100": "#ECF1FF",
        "dsaOcean-200": "#3F75FF",
        "dsaYellow-100": "#FEF8E7",
        "dsaYellow-200": "#F3C024",
        "dsaOrange-100": "#FDF3EC",
        "dsaOrange-200": "#F08642",
        "dsaPassion-100": "#FFF0E5",
        "dsaPassion-200": "#FF6600",
        "dsaLightBrown-100": "#FFF9F3",
        "dsaLightBrown-200": "#FFC888",
        "dsaBrown-100": "#FAF3E5",
        "dsaBrown-200": "#CA8700",
        "dsaNavy-100": "#E7E8EC",
        "dsaNavy-200": "#131E40",
        "dsaGrey-100": "#F6F7f9",
        "dsaGrey-200": "#A5ADC6",
        dsaMobileBrown: "#9299AF",
        "dsaMobileBrown-200": "#444D68",
        dsaMobileLightBrown: "#A9AEC0",
        "dsaMobileBrown-200": "#848CA5",
        dsaBackground: "#F9FAFC",
        dsaBorder: "#E9ECF2",
        "dsaBorder-200": "#F3F5F7",
        dsaInput: "#F4F5F8"
      },
      spacing: {
        "14": "3.5rem",
        "60": "15rem",
        "72": "18rem",
        "96": "24rem",
        "128": "30rem"
      }
    }
  }
};
