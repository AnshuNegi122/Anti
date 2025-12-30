/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'classic-beige': '#F5F5F3',
        'classic-charcoal': '#2C2C2C',
        'classic-accent': '#C0775C', // Terracotta
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
