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
				textCode : 'var(--text-code)',
        bgMain: 'rgb(var(--bg-main-rgb) , <alpha-value>)',
        bgSecondary: 'rgb(var(--bg-secondary-rgb) , <alpha-value>)',
        bgSecondary200: 'rgb(var(--bg-secondary-200-rgb) , <alpha-value>)',
        bgSecondary300: 'var(--bg-secondary-300)',
        
      },
			typography: ({ theme }) => ({
        DEFAULT: {
          css: {
						'--tw-prose-quote-borders': theme('colors.textQuote'),
						'--tw-prose-bold': theme('colors.textColor'),
            '--tw-prose-body': theme('colors.textColor'),
            '--tw-prose-headings': theme('colors.textColor'),
            '--tw-prose-quotes': theme('colors.textQuote'),
            '--tw-prose-links': theme('colors.textAccent'),
            '--tw-prose-code': theme('colors.textCode'),
						'--tw-prose-hr': theme('colors.textQuote'),
						'--tw-prose-bullets': theme('colors.textQuote'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography') // Добавьте плагин здесь
  ],
};
