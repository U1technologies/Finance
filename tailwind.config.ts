
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				// Fintech specific colors
				navy: {
					DEFAULT: '#0A2342',
					light: '#1D3557',
					dark: '#061A33'
				},
				teal: {
					DEFAULT: '#2A9D8F',
					light: '#3EB1A4',
					dark: '#218A7E'
				},
				gold: {
					DEFAULT: '#F8C100',
					light: '#FFCA28',
					dark: '#E6B000'
				},
				gray: {
					DEFAULT: '#F8F9FA',
					light: '#FFFFFF',
					dark: '#E9ECEF'
				},
				slate: {
					DEFAULT: '#6C757D',
					light: '#ADB5BD',
					dark: '#495057'
				}
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"slide-in": {
					"0%": { transform: "translateX(-20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.4s ease-out",
				"slide-in": "slide-in 0.4s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"pulse-soft": "pulse-soft 2s ease-in-out infinite"
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
				'nav': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'cta': '0 4px 12px rgba(42, 157, 143, 0.2)',
				'gold-glow': '0 4px 20px rgba(248, 193, 0, 0.25)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-primary': 'linear-gradient(135deg, #0A2342 0%, #1D3557 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #2A9D8F 0%, #3EB1A4 100%)',
				'gradient-gold': 'linear-gradient(135deg, #F8C100 0%, #FFCA28 100%)',
				'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
