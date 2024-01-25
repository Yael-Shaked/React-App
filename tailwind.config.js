/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [
    function ({ addUtilities, theme }) {
      const keyframes = {
        '@keyframes brighten': {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.2)' },
        },
      };

      addUtilities(keyframes, ['responsive', 'hover']);
    },
  ],

  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
};
