/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'sans-serif'],
      },
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'hover-cyan': 'hsl(158, 36%, 20%)',
        cream: '#f2ebe3',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
    },
  },
  plugins: [],
};
