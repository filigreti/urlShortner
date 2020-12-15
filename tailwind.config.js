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
    backgroundColor: ["active", "focus", "hover", "first", "last", "even"],
    gradientColorStops: ["responsive", "hover", "focus", "active"]
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      display: ["Poppins"],
      body: ["Poppins"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    extend: {
      colors: {
        primaryBlue: "#253B95",
        primaryGreen: "#06B6CB",
        primaryGray: "#909090",
        accentLight: "#EFFAFF",
        accentBlue: "#B2E7FF",
        accentDark: "#333333",
        secondaryYellow: "#FFA503",
        secondaryPurple: "#452DB4",
        secondaryRed: "#FE463F",
        secondaryGreen: "#11A529",
        gradientDark: "#0143AA",
        gradientLight: "#003283",
        backgroundArea: " #FAFDFF",
        lightBlur: "#B2E8FF",
        veryLight: "#F9F9F9",
        transparentBackground: "#ECF0F5A8"
      },
      spacing: {
        "60": "15rem",
        "65": "19rem",
        "96": "24rem",
        "128": "32rem"
      }
    }
  }
};
