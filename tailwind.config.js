/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#282938",
        mainColor: "#1c1e53",
        primary: "#CAE0EB",
        secondary: "#5E3BEE",
        // Add more custom colors as needed
      },

    },
  },
  plugins: [],
};
