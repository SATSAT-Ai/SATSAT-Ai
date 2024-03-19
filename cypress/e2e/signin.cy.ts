import "../support/commands";
import { signIn } from "next-auth/react";

describe("Signs in user", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.getElement("signIn").should("be.visible").visit("/signin");
	});

	it("display errors onSubmit without form value", () => {
		cy.getElement("email_input").should("not.be.disabled");
		cy.getElement("signin_error_message").should("not.exist");
		cy.getElement("signin_user_button").should("not.be.disabled").click();
		cy.getElement("signin_error_message")
			.should("exist")
			.should("contain.text", "Email is required");
	});

	it("should not signIn if email does not exist ", () => {
		cy.intercept(
			"POST",
			`${Cypress.env("SATSATAI_MS_USER")}/auth/login/request`,
			(req) => {
				req.reply({
					fixture: "signInUserEmail",
					statusCode: 200,
					headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("login_request");

		cy.getElement("email_input")
			.should("not.be.disabled")
			.type("testing@gmail.com"); //wrong email credentials
		cy.getElement("signin_user_button")
			.click()
			.should("be.disabled")
			.wait("@login_request");

		cy.getElement("signin_verification_error").should("not.exist");
		cy.getElement("signin_verification_input").should("not.be.disabled");
		cy.getElement("verify_signin_button").should("not.be.disabled").click();
		cy.getElement("signin_verification_error")
			.should("be.visible")
			.should("have.text", "verification code is required");

		cy.getElement("resendSignInToken").click();
		cy.getElement("modal").click();

		cy.fixture("signInWithVerificationToken").then((data) => {
			cy.getElement("signin_verification_input")
				.should("not.be.disabled")
				.type(data.password);

			cy.getElement("verify_signin_button").click().should("be.disabled");
			cy.getElement("signin_verification_input").should("be.disabled");
			signIn("credentials", {
				email: "testing@gmail.com",
				password: data.password,
				redirect: false,
				callbackUrl: "/dashboard",
			});
			cy.getElement("signin_verification_error")
				.should("exist")
				.should("have.text", "An error occurred");
			cy.getElement("signin_verification_input").should(
				"have.class",
				"border-crimson"
			);
		});
	});
	it("should signIn user successfully", () => {
		cy.intercept(
			"POST",
			`${Cypress.env("SATSATAI_MS_USER")}/auth/login/request`,
			(req) => {
				req.reply({
					fixture: "signInUserEmail",
					statusCode: 200,
					headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("login_request");

		cy.fixture("signInUserEmail").then((data) => {
			cy.getElement("email_input").should("not.be.disabled").type(data.email);
			cy.getElement("signin_user_button")
				.click()
				.should("be.disabled")
				.wait("@login_request");
		});
		cy.getElement("signin_verification_error").should("not.exist");
		cy.getElement("signin_verification_input").should("not.be.disabled");
		cy.getElement("verify_signin_button").should("not.be.disabled").click();
		cy.getElement("signin_verification_error")
			.should("be.visible")
			.should("have.text", "verification code is required");

		cy.getElement("resendSignInToken").click();
		cy.getElement("modal").click();

		cy.fixture("signInWithVerificationToken").then((data) => {
			cy.getElement("signin_verification_input")
				.should("not.be.disabled")
				.type(data.password);

			cy.getElement("verify_signin_button").click().should("be.disabled");
			cy.getElement("signin_verification_input").should("be.disabled");
			signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false,
				callbackUrl: "/dashboard",
			});
		});
	});
});
