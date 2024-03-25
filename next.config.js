/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
});

const withPWA = require("next-pwa");

module.exports = withNextra(
	withPWA({
		pwa: {
			// disable: process.env.NODE_ENV === "development",
			dest: "public",
			register: true,
			skipWaiting: true,
		},
	})
);
