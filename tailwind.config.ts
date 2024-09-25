import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/lib/**/*.js",
		"./fonts/fonts.scss",
	],
	theme: {
		extend: {
			backgroundImage: ({ theme }) => ({
				"silver-gradient":
					"linear-gradient(to top,#050d0021,#ffffff,#050d0021)",
				"silver-gradient2":
					"linear-gradient(to left,#050d0021,#ffffff,#050d0021)",

				"brand-green-fire": `linear-gradient(to top, ${theme(
					"colors.brand-green"
				)},${theme("colors.brand-green-darker")},${theme("colors.darker")})`,
			}),
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsla(var(--background))",
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

			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",

				"shadAccordion-down": "shadAccordion-down .1s ease-out forwards",
				"shadAccordion-up": "shadAccordion-up .1s ease-out forwards",

				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				grid: "grid 15s linear infinite",
				"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
				slide: "slide var(--speed) ease-in-out infinite alternate",
				meteor: "meteor 5s linear infinite",
				"default-blink": "default-blink 1.5s infinite alternate ease-in",
				"shape-shift": "shape-shift-square 2.5s infinite",
				"pie-shift": "pie-shift 0.5s infinite alternate",
				"pie-shift-origin": "pie-shift-origin 4s infinite linear",
				blink: "blink 1s infinite alternate ease-in;",
				"angry-blink": "angry-blink 1.5s infinite alternate",
			},

			keyframes: {
				"angry-blink": {
					"0%,20%": {
						transform: "scaleX(var(--s, 1)) rotate(0deg)",
						"clip-path": "inset(0)",
					},

					"60%,100%": {
						transform: "scaleX(var(--s, 1)) rotate(30deg)",
						"clip-path": "inset(40% 0 0)",
					},
				},

				"shadAccordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"shadAccordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},

				blink: {
					"0%,70%": {
						"-webkit-mask-size": "50% 100%",
						"mask-size": "50% 100%",
					},
					"85%": {
						"-webkit-mask-size": "50% 0",
						"mask-size": "50% 0",
					},
					"100%": {
						"-webkit-mask-size": "50% 100%",
						"mask-size": "50% 100%",
					},
				},
				"pie-shift": {
					"100%": {
						transform: "translate(-10px, -10px)",
					},
				},
				"pie-shift-origin": {
					"0%,24.99%": {
						transform: "rotate(0deg)",
					},
					"25%,49.99%": {
						transform: "rotate(90deg)",
					},
					"50%,74.99%": {
						transform: "rotate(180deg)",
					},
					"75%,100%": {
						transform: "rotate(270deg)",
					},
				},

				"default-blink": {
					"0%": {
						"background-size": "100%",
					},

					"70%": {
						"background-size": "100% 40%, 8px 8px",
					},
					"85%": {
						"background-size": "100% 120%, 8px 8px",
					},
					"100%": {
						"background-size": "100% 40%, 8px 8px",
					},
				},

				"shape-shift-square": {
					"0%": {
						inset: "0 35px 35px 0",
					},
					"12.5%": {
						inset: "0 35px 0 0",
					},
					"25%": {
						inset: "35px 35px 0 0",
					},
					"37.5%": {
						inset: "35px 0 0 0",
					},
					"50%": {
						inset: "35px 0 0 35px",
					},
					"62.5%": {
						inset: " 0 0 0 35px",
					},
					"75%": {
						inset: " 0 0 35px 35px",
					},
					"87.5%": {
						inset: "0 0 35px 0",
					},
					"100%": {
						inset: " 0 35px 35px 0",
					},
				},
				orbit: {
					"0%": {
						transform:
							"rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
					},
					"100%": {
						transform:
							"rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
					},
				},
				spotlight: {
					"0%": {
						opacity: "0",

						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				slide: {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
		},
		colors: {
			"brand-green": "#29a173",
			"brand-green-darker": "#174634",
			"grey-lightest": "#a3a3a3",
			white: "#fff",
			darker: "#050d0a",
			"mid--yellow": "#c98821",
			"grey-light": "#444c48",
			transparent: "transparent",
			crimson: "crimson",
		},

		fontSize: {
			"text-normal": "16px",
			"text-40": "40px",
			"text-50": "50px",
			"text-60": "60px",
			"text-80": "80px",
			"text-24": "24px",
			"text-20": "20px",
			"text-14": "14px",
			"text-12": "12px",
		},
	},

	plugins: [
		require("flowbite/plugin")({
			charts: true,
		}),
	],
};

export default config;
