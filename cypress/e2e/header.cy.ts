import "../support/commands";

/// <reference types="cypress" />

describe("buttons and links navigates properly", () => {
	beforeEach("navigate to homepage", () => {
		cy.visit("/");
	});
	it("navigates to contact us", () => {
		cy.getElement("Support").contains("Support").click();
		cy.location("pathname").should("equal", "/contact");
	});
	it("navigates to choose-pricing", () => {
		cy.getElement("pricing-button").click();
		cy.location("pathname").should("equal", "/choose-your-pricing");
	});
	it("navigates to signIn page", () => {
		cy.getElement("signIn").click();
		cy.location("pathname").should("equal", "/signin");
	});
	it("navigates to homepage", () => {
		cy.getElement("SatSat-Ai-logo").click();
		cy.urlIncludes("/");
	});
	it("show additional nav onMouseClick", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.getElement("prod-dropDown")
			.should("be.visible")
			.getElement("explore-all-features")
			.contains("Explore All Features")
			.click();
		cy.location("pathname").should("equal", "/features");
	});
	it("should navigate to scan-documents", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate("prod-dropDown", `scan-documents`);
		cy.location("pathname").should("equal", "/scan-documents");
	});
});

describe("navigation to target feature page (dynamic routes)", () => {
	beforeEach("navigate to homepage", () => {
		cy.visit("/");
	});
	it("should navigate to statement-scan feature page", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate("prod-dropDown", `/features/statement-scan`);
		cy.location("pathname").should("equal", "/features/statement-scan");
		cy.getElement(`active-feature`)
			.should("be.visible")
			.getElement("active-feature-text")
			.should("be.visible");
	});
	it("should navigate to fraud-detection feature page", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate("prod-dropDown", `/features/fraud-detection`);
		cy.location("pathname").should("equal", "/features/fraud-detection");
		cy.getElement(`active-feature`)
			.should("be.visible")
			.getElement("active-feature-text")
			.should("be.visible");
	});
	it("should navigate to Insights feature page", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate(
			"prod-dropDown",
			`/features/insights-to-financial-documents`
		);
		cy.location("pathname").should(
			"equal",
			"/features/insights-to-financial-documents"
		);
		cy.getElement(`active-feature`)
			.should("be.visible")
			.getElement("active-feature-text")
			.should("be.visible");
	});
	it("should navigate to client-profile-management feature page", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate(
			"prod-dropDown",
			`/features/client-profile-management`
		);
		cy.location("pathname").should(
			"equal",
			"/features/client-profile-management"
		);
		cy.getElement(`active-feature`)
			.should("be.visible")
			.getElement("active-feature-text")
			.should("be.visible");
	});
	it("should navigate to ai-chatbot feature page", () => {
		cy.getElement("dropdown-Products").contains("Products").click();
		cy.targetElementNavigate("prod-dropDown", `/features/ai-chatbot`);
		cy.location("pathname").should("equal", "/features/ai-chatbot");
		cy.getElement(`active-feature`)
			.should("be.visible")
			.getElement("active-feature-text")
			.should("be.visible");
	});
});

describe("navigates into developer documentation pages", () => {
	beforeEach("navigate back home", () => {
		cy.visit("/");
	});
	it("should navigate to developers landing page", () => {
		cy.getElement("dropdown-Developers").contains("Developers").click();
		cy.targetElementNavigate("dev-dropdown", "/developers");
		cy.location("pathname").should("equal", "/developers");
		cy.getElement("developer-docs-button").click();
		cy.urlIncludes("/developers/api-docs");
	});
	it("should navigate to developers/api", () => {
		cy.getElement("dropdown-Developers").click().contains("Developers");
		cy.targetElementNavigate("dev-dropdown", "/developers/api-docs");
		cy.location("pathname").should("equal", "/developers/api-docs");
	});
	it("should navigate to developers/webhooks", () => {
		cy.getElement("dropdown-Developers").click().contains("Developers");
		cy.targetElementNavigate("dev-dropdown", "/developers/webhooks");
		cy.location("pathname").should("equal", "/developers/webhooks");
	});
	it("should navigate to developers/authentication", () => {
		cy.getElement("dropdown-Developers").click().contains("Developers");
		cy.targetElementNavigate("dev-dropdown", "/developers/api/authentication");
		cy.location("pathname").should("equal", "/developers/api/authentication");
	});
});
// prod-dropDown
// sol-dropdown
