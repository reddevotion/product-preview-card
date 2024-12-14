/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          1: "hsl(158, 36%, 37%)",
          2: "hsl(30, 38%, 92%)",
          3: "#6C7289",
          4: "#FFFFFF",
          5: "#1a4031"
        }
      },

      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        fraunces: "var(--font-fraunces)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".h1": {
          color: "#000000", 
          fontSize: "clamp(26px, 3vw, 32px)",
          fontWeight: "700"
        },
      })
    })
  ],
}

