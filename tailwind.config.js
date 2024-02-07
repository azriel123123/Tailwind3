/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    },
    // Animate Neon
    animation: {
      "neonText" : "neonText 1s ease-in-out infinite alternate",
      "neonBox" : "neonBox 1s ease-in-out infinite alternate",
      "neonBorder" : "neonBox 1s ease-in-out infinite alternate",
    },
    keyframes:{
      neonText: {
        "0%": {
          textShadow: "0 0 10px #00B9FC",
        },
        "100%": {
          textShadow: "0 0 10px #ff0000",
        },
      },
      neonBox: {
        "0%": {
          boxShadow: "0 0 10px #00B9FC",
        },
        "100%": {
          boxShadow: "0 0 10px #ff0000",
        },
      },
      neonBorder: {
        "0%": {
          borderShadow: "0 0 10px #00B9FC",
        },
        "100%": {
          borderShadow: "0 0 10px #ff0000",
        },
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}