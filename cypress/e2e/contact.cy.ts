import "../support/commands.ts";
/// <reference types="cypress" />

describe("contact-us spec", () => {
	it("should validate and submit successfully", () => {
		cy.visit("/");
		cy.getElement("Support").click();
		cy.location("pathname").should("equal", "/contact");
		cy.getElement("contact-form").within(() => {
			cy.getElement("submit-form").click();
			cy.getElement("firstName-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("lastName-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("subject-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("message-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("firstName").type("SatSat-ai");
			cy.getElement("submit-form").click();

			cy.getElement("firstName-error").should("not.exist");
			cy.getElement("lastName-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("subject-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("message-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("lastName").type("cy-test");
			cy.getElement("submit-form").click();

			cy.getElement("firstName-error").should("not.exist");
			cy.getElement("lastName-error").should("not.exist");
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("subject-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("message-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("email").type("SatSat-ai@gmail.com");
			cy.getElement("submit-form").click();

			cy.getElement("firstName-error").should("not.exist");
			cy.getElement("lastName-error").should("not.exist");
			cy.getElement("email-error").should("not.exist");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("subject-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("message-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("phone").type("0556985656");
			cy.getElement("submit-form").click();

			cy.getElement("firstName-error").should("not.exist");
			cy.getElement("lastName-error").should("not.exist");
			cy.getElement("email-error").should("not.exist");
			cy.getElement("phone-error").should("not.exist");
			cy.getElement("subject-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("message-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("subject").click().should("be.visible");
		});
		cy.getElement("general").click().should("have.text", "General Enquiry"); //general option is not accessible within form

		cy.getElement("subject").click().should("be.visible");
		cy.getElement("onboarding").click().should("have.text", "Onboarding"); //general option is not accessible within form

		cy.getElement("subject").click().should("be.visible");
		cy.getElement("account").click().should("have.text", "Account"); //general option is not accessible within form

		cy.getElement("subject").click().should("be.visible");
		cy.getElement("sales").click().should("have.text", "Sales"); //general option is not accessible within form

		// ====================

		cy.getElement("message").type("SatSat-Ai Cypress test");
		cy.getElement("contact-form").submit();

		cy.getElement("firstName-error").should("not.exist");
		cy.getElement("lastName-error").should("not.exist");
		cy.getElement("email-error").should("not.exist");
		cy.getElement("phone-error").should("not.exist");
		cy.getElement("subject-error").should("not.exist");
	});
});
