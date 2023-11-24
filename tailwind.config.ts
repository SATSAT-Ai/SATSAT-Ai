import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"brand-green": "#29a173",
			"brand-green-darker": "#174634",
			"grey-lightest": "#a3a3a3",
			white: "#fff",
			darker: "#050d0a",
			"mid--yellow": "#c18e3b",
			"grey-light": "#444c48",
			transparent: "transparent",
			crimson: "crimson",
		},

		extend: {
			backgroundImage: {
				"silver-gradient": "linear-gradient(to top,#050d0a,#ffffff,#050d0a)",
				"silver-gradient2": "linear-gradient(to left,#050d0a,#ffffff,#050d0a)",
			},
		},

		fontSize: {
			"text-normal": "16px",
			"text-40": "40px",
			"text-50": "50px",
			"text-60": "60px",
			"text-80": "80px",
			"text-24": "24px",
			"text-20": "20px",
			"text-12": "12px",
		},
	},

	plugins: [],
};
export default config;
