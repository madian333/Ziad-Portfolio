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
        // Navigation panel colors
        'nav-light-bg': '#f5e1f5', // More intense violet mix
        'nav-dark-bg': '#f8e0ff',   // Keep the dark mode color as is
        // Main background colors
        'main-light-bg': '#f5e1f5', // Match the nav for consistency
        'main-dark-bg': '#3a0061',  // Keep the dark mode color as is
      },
    },
  },
  plugins: [],
};