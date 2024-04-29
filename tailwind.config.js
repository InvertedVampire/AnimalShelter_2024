// this holds the configuration for styling with tailwind css
import daisyui from 'daisyui';

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0DB4BE',
          secondary: '#DEF3F4',
          accent: '#5B7485',
          neutral: '#0DB4BE',
          'base-100': '#FFFFFF',
          info: '#ACE6F2',
          success: '#04D3BC',
          warning: '#FFE65B',
          error: '#ff0000',
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
};
