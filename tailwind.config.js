/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '2px 2px 15px rgba(78, 2, 134, 0.2)',
      },
    },
  }
};
