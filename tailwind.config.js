/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "light-green": "#39DB4A",
        "light-red": "#FF6868",
        "wax-green": "#C1F1C6",
        "text-green": "#5FE26C",
        "lightest-green": "#EDFFEF",

        "secondary": "#555"
      },

      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

