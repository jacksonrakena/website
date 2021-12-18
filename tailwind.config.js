module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  jit: "off",
  theme: {
    extend: {
      colors: {
        black: "#333333",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Inter, Arial",
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Inconsolata"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
