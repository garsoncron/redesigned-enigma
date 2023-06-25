/** @type {import('tailwindcss').Config} */
//TODO: come back to this once theme added in
//const { theme } = require('app/design/tailwind/theme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
}

//TODO: come back to this once theme added in, goes in module.exports
/**
 *   theme: {
    ...theme,
  }, 
*/  
