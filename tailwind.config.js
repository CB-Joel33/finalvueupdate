
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        abel: ['Abel', 'sans-serif'],
        matter: ['Matter', 'sans-serif'],
      },
    },
    screens: {
       'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
    }
  },
  plugins: [],
}