/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sde-dark': '#0f172a', // Rich Slate/Navy
        'sde-accent': '#1e293b',
        'sde-gold': '#c5a059', // Sophisticated Gold
        'sde-light': '#f8fafc',
        'sde-muted': '#64748b',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7), transparent)',
      }
    },
  },
  plugins: [],
}
