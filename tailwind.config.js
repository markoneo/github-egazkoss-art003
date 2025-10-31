/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'cream': {
          50: '#EDEDE9',
          100: '#F5EBE0',
          200: '#E3D5CA',
          300: '#D6CCC2',
          400: '#D5BDAF',
        },
        'custom-gray': '#9a8c98'
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};