/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        "selected-text": "#a3a3ff",
        theme: "#5c318c",
        secondary: "#9191a4",
        badge: "#3f3f51",
        "input-border": "#565666",
        input: "#2a2a33",
      },
    },
  },
  plugins: [],
};
