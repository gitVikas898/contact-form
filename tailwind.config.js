/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreenLighter: 'hsl(148, 38%, 91%)',
        primaryGreenMedium: 'hsl(169, 82%, 27%)',
        errorRed: 'hsl(0, 66%, 54%)',
        neutralWhite: 'hsl(0, 0%, 100%)',
        grey500: 'hsl(186, 15%, 59%)',
        grey900: 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
