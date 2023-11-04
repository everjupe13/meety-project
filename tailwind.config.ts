/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const toPX = (values: any) =>
  Object.fromEntries(values.map((v: any) => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))

const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica',
  'Segoe UI',
  'Arial',
  'sans-serif'
]

module.exports = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],

  corePlugins: {
    container: false
  },

  theme: {
    screens: {
      xl: { max: '1399.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '575.99px' }
    },

    fontFamily: {
      sans: ['Montserrat', ...fallbackSansSerifFonts],
      hnd: ['"Helvetica Now Display"', ...fallbackSansSerifFonts]
    },
    spacing: object0to100px,
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        hover: 'var(--hover-topground)',

        background: 'var(--background)',
        foreground: 'var(--topground)',

        orange: 'var(--orange)',

        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',

          text: 'hsl(var(--secondary-text))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        blue: 'hsl(var(--blue))',
        'dark-base-green': 'hsl(var(--dark-base-green))'
      },
      borderRadius: {
        xl: '32px',
        lg: '28px',
        md: '24px',
        sm: '18px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities }: { addUtilities: any }) => {
      const typographyWithOnlySizes = {} as Record<string, any>
      for (let i = 8; i <= 100; i += 2) {
        typographyWithOnlySizes[`.text-${i}`] = { fontSize: `${i}px` }
      }

      addUtilities(typographyWithOnlySizes)
    })
  ]
}
