/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scrollY 70000ms linear 0s infinite normal none running'
      },
      keyframes: {
        scrollY: {
          'from': {
            transform:
              'translateY(0px)'
          },
          'to': {
            transform:
              'translateY(-100%)'
          },
        }
      }
    },
  },
  plugins: [],
}