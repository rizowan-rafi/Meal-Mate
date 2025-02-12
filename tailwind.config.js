/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", {
   
}],
  },
  theme: {
    extend: {
      colors: {
        'primary': "#2f27ce",
        'secondary': "#dedcff",
        'accent': '#433bff',
        'text': '#050315',
        'background': '#fbfbfe'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class'
}