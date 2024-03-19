import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "23becv",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:3000",
		chromeWebSecurity: false,
		pageLoadTimeout: 100000,
		defaultCommandTimeout: 60000,
		requestTimeout: 40000,
	},
});
