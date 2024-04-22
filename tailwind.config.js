// this holds the configuration for styling with tailwind css

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#0DB4BE",
            "secondary": "#ACE6F2",
            "accent": "#5B7485",
            "neutral": "#0DB4BE",
            "base-100": "#DEF3F4",
            "info": "#ACE6F2",
            "success": "#04D3BC",
            "warning": "#FFE65B",
            "error": "#ff0000",
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};