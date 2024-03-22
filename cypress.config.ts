import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "23becv",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://test.satsat-ai.vercel.app",
		chromeWebSecurity: false,
		pageLoadTimeout: 90000,
		defaultCommandTimeout: 40000,
		requestTimeout: 20000,
	},
});
