/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        brown: "#58454B",
        "purple-pink": "#AD88C6",
        purple: "#7469B6",
        "pale-blue": "#BDBFDE",
        pink: "#E1AFD1",
        "pale-pink": "#FFE6E6",
        "dark-blue": "#17153B",
        "lavender": "#C8ACD6"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #AD88C6 7.21%, #7469B6 45.05%, #FFE6E6 78.07%)",
      }),
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "chakra-petch": ["Chakra Petch", "sans-serif"],
        "silkscreen": ["Silkscreen", "sans-serif"],
      },
      content: {
        sparkles: "url('./assets/sparkles.svg')",
        logo: "url('./assets/logo.png')",
        portrait: "url('./assets/portrait.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}