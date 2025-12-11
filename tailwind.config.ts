import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        covenant: {
          gold: '#ffd700',
          dark: '#0a0a0f',
          purple: '#1a1a2e',
          glow: '#2a2a4e'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'portal-open': 'portalOpen 1s ease-out forwards'
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { textShadow: '0 0 60px rgba(255, 215, 0, 1)' }
        },
        portalOpen: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1', boxShadow: '0 0 100px rgba(255, 215, 0, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
