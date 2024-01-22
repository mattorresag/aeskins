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
          pure100: "#F0F0F0",
          pure200: "#DFDFE0",
          pure300: "#BABABC",
          pure400: "#85858C",
          pure500: "#4B4B53",
          pure600: "#313135",
          pure700: "#1D1D20",
          pure800: "#0D0D0E",
          pure900: "#040404",
        },
        status: {
          open: "rgba(12, 195, 96, 0.1)",
          closed: "rgba(195, 12, 12, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
        metropolis: ["Metropolis", "ui-sans-serif", "system-ui"],
        fontWeight: {
          normal: "400",
        },
      },

      backgroundImage: {
        "background-home": "url('/assets/banner.png')",
        "background-homeMobile": "url('/assets/bannerMobile.png')",
        "background-preenchedores": "url('/assets/preenchedores.png')",
        "background-preenchedoresMobile":
          "radial-gradient(602.15% 130.28% at 2.73% 13.33%, rgba(6, 247, 132, 0.10) 0%, rgba(255, 255, 255, 0.00) 47.93%, rgba(6, 247, 132, 0.10) 100%)",
      },
      boxShadow: {
        preenchedores: "0px 16px 32px 0px rgba(0, 0, 0, 0.04)",
      },
    },
  },

  plugins: [require("daisyui")],
};
