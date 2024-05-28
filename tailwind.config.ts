import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bodyText: 'rgb(29, 29, 31)',
        headlineText: 'rgb(29, 29, 31)',
        bodyBackground: 'rgb(255, 255, 255)',
        link: 'rgb(0, 102, 204)',
        ctaBlue: 'rgb(37, 99, 235)',
        ctaBlueHover: 'rgb(29, 78, 216)',
        secondary: 'rgb(245, 105, 0)',
      },
      fontFamily: {
        body: ['"SF Pro Text"', '"SF Pro Icons"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        section: '150px',
        features: '100px',
        headlineToBody: '60px',
        bodyToImage: '40px',
      },
      fontSize: {
        base: '17px',
        h1: '5rem',
        h2: '4rem',
        h3: '3rem',
        h4: '2.5rem',
        h5: '2rem',
        h6: '1.5rem',
      },
      lineHeight: {
        base: '1.47',
      },
      letterSpacing: {
        base: '-0.022em',
      },
    },
  },
  plugins: [],
};
export default config;
