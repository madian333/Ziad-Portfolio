/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg-start': '#ffffff', // White
        'light-bg-end': '#ddd6fe',   // Light violet
        'dark-bg-start': '#1f2937',  // Dark gray
        'dark-bg-end': '#5b21b6',    // Dark violet
      },
    },
  },
  plugins: [],
};