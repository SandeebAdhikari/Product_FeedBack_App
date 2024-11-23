import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#AD1FEA",
        primaryBlue: "#4661E6",
        white: "#FFFFFF",
        lightBlue: "#F2F4FF",
        veryLightBlue: "#F7F8FD",
        darkBlue: "#3A4374",
        grayBlue: "#647196",
        coral: "#F49F85",
        skyBlue: "#62BCFA",
      },
      textColor: {
        silver: "#F7F8FD",
        lightYellow: "#F49F85",
      },
      backgroundColor: {
        lighterPeach: "#F7F8FD",
        peach: "#F49F85",
        semiDarkNavy: "#3A4374",
        darkNavy: "#647196",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        h1: ["24px", { lineHeight: "35px", letterSpacing: "-0.33px" }],
        h2: ["20px", { lineHeight: "29px", letterSpacing: "-0.25px" }],
        h3: ["18px", { lineHeight: "26px", letterSpacing: "-0.25px" }],
        h4: ["14px", { lineHeight: "20px", letterSpacing: "-0.2px" }],
        body1: ["16px", { lineHeight: "23px" }],
        body2: ["15px", { lineHeight: "22px" }],
        body3: ["13px", { lineHeight: "19px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
