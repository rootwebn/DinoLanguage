/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'shiraz': '#b3043f',
        'thunder': '#2a2329',
        'windsor' : '#3f0b6a',
        'chattel' : '#bcb5c5',
        'turmeric' : '#cab74c',
        'veniceBlue' : '#096796',
        'thunderbird' : '#cb1b0e',
        'indigo' : '#3e0f6b',
        'stiletto' : '#a12e37',
        'space' : '#272d2f',
        'royalBlue' : '#366bdf',
        'hash' : '#2F4175',
        'darkerHash' : '#2D354A',
        'silentWhite' : '#909BB4',
        'orange' : '#FFAA00',
        'flamingo' : '#F1467F',
        'froly' : '#F57586',
        'waikanaGrey' : '#5a6f93',
        'mercury' : '#E3E3E3',
        'blackcurrant' : '#3a2e3e',
        'denim' : '#0c67c8',
        'tequila' : '#ffe7ca',
        'sandrift' : '#B09C84',
        'copperfield' : '#df7e78',
        'oldRose' : '#bf7276',
        'terracotta' : '#E46455',
        'danube' : '#6073D5',
        'elm' : '#1A8082',
        'scandal' : '#c8f9e3',
        'voodoo' : '#422b44',
        'curiousBlue' : '#2aaddc',
        'hippieBlue' : '#4a92a8',
        'java' : '#13CFA6',
        'fruidSalad' : '#4C934D',
        'punch' : '#CC3A24',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}