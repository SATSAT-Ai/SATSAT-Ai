import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "23becv",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:3000",
		chromeWebSecurity: false,
		pageLoadTimeout: 90000,
		defaultCommandTimeout: 40000,
		requestTimeout: 20000,
	},
});
