/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        tradewind_50: '#f3faf9',
        tradewind_100: '#d7f0ef',
        tradewind_300: '#66bfbf',
        tradewind_400: '#54aaad',
        tradewind_500: '#3a8e92',
        tradewind_700: '#27595e',
        tradewind_900: '#213d40',
        tradewind_950: '#0e2225',
      },
    },
  },
  plugins: [],
}

