/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
				borderColor : 'var(--border-color)',
				textColor : 'var(--text-color)',
				textAccent : 'var(--text-accent)',
				textSecondary: 'var(--text-secondary)',
				textQuote : 'var(--text-quote)',
        bgMain: 'rgb(var(--bg-main-rgb) , <alpha-value>)',
        bgSecondary: 'rgb(var(--bg-secondary-rgb) , <alpha-value>)',
        bgSecondary200: 'rgb(var(--bg-secondary-200-rgb) , <alpha-value>)',
        bgSecondary300: 'var(--bg-secondary-300)',
        
      },
    },
  },
  plugins: [],
};
