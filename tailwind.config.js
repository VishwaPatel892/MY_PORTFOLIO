/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F472B6", // Soft Pink (Button)
        secondary: "#A855F7", // Purple (Gradient)
        background: "#0B0212", // Almost Black Purple
        card: "#1a1025", // Dark Card Background
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
