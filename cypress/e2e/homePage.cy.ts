import "../support/commands";

/// <reference types="cypress" />

describe("Buttons must redirect to expected pages", () => {
	it("should get all get started button and navigate to pricing page", () => {
		cy.visit("/");
		cy.getElement("choose-pricing-button").as("pricingButton");
		cy.get("@pricingButton").each(($button) => {
			cy.wrap($button).as("button");
			cy.get("@button").should("not.be.disabled").should("have.attr", "href");
			cy.get("@button").should("not.be.disabled").click();
		});
		cy.location("pathname").should("equal", "/choose-your-pricing");
	});
});
