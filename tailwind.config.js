/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          pure: "#29223E",
          pure10: "#EAE9EC",
          pureOp10: "rgba(41, 34, 62, 0.1)",
          pureHony: "#EBFFF6",
          pureHony10: "#FDFFFF",
          pureHonyOp10: "rgba(235, 255, 246, 0.10)",
        },
        primary: {
          pure: "#07D767",
          pure10: "#E6FFF2",
          pureOp10: "rgba(0, 255, 117, 0.1)",
        },
        neutral: {
          pure100: "#EFEFF0",
          pure200: "#DFDFE0",
          pure300: "#7C7C83",
          pure400: "#68686E",
          pure500: "#4B4B53",
          pure600: "#313135",
          pure700: "#19191C",
          pure800: "#0D0D0E",
          pure900: "#040404",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
        fontWeight: {
          normal: "400",
        },
      },
      boxShadow: {
        form: "0px 4px 24px 0px rgba(207, 214, 219, 0.08)",
      },
    },
  },

  plugins: [require("daisyui")],
};
