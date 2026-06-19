/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust these paths to match your project structure
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Your custom range breakpoint
        'custom-range': { min: '1023px', max: '1227px' },
      },
    },
  },
  plugins: [],
}