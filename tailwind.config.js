import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A855F7',
        },
        surface: '#F8FAFC',
        text: {
          DEFAULT: '#1F2937',
          muted: '#6B7280',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(124, 58, 237, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        digitools: {
          primary: '#7C3AED',
          secondary: '#A855F7',
          accent: '#A855F7',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          'base-200': '#F8FAFC',
          'base-300': '#E5E7EB',
        },
      },
    ],
  },
}
