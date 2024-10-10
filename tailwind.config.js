/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': 'hsl(209, 23%, 22%)',   // Dark Blue for dark mode elements
        'deep-navy': 'hsl(207, 26%, 17%)',       // Very Dark Blue for dark mode background
        'charcoal': 'hsl(200, 15%, 8%)',         // Very Dark Blue for light mode text
        'stone-gray': 'hsl(0, 0%, 52%)',         // Dark Gray for light mode input
        'mist-gray': 'hsl(0, 0%, 98%)',          // Very Light Gray for light mode background
        'white': 'hsl(0, 0%, 100%)',             // White for text in dark mode
      } 
    },
  },
  plugins: [],
}

