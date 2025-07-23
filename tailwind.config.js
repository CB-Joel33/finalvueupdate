import { defineConfig } from 'vite'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel', 'sans-serif'],
        matter: ['Matter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}