import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/lib/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"silver-gradient":
					"linear-gradient(to top,#050d0021,#ffffff,#050d0021)",
				"silver-gradient2":
					"linear-gradient(to left,#050d0021,#ffffff,#050d0021)",
			},
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
			},

			keyframes: {
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
