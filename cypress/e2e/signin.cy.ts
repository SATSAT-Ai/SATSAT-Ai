import "../support/commands";
import { signIn } from "next-auth/react";

describe("User sign in flow", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.getElement("signIn").should("be.visible").click();
		cy.location("pathname").should("equal", "/signin");
	});

	it("display errors onSubmit without form value", () => {
		cy.getElement("email_input").should("not.be.disabled");
		cy.getElement("signin_error_message").should("not.exist");
		cy.getElement("signin_user_button").should("not.be.disabled").click();
		cy.getElement("signin_error_message")
			.should("be.visible")
			.should("contain.text", "Email is required");
	});

	it("should not signIn if email does not exist ", () => {
		cy.getElement("email_input").should("not.be.disabled");
		cy.getElement("signin_error_message").should("not.exist");
		cy.intercept(
			"POST",
			`${Cypress.env("SATSATAI_MS_USER")}/api/auth/login/request`,
			(req) => {
				req.reply({
					fixture: "signInUserEmail",
					statusCode: 400,
					headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("login_request");

		cy.getElement("signin_user_button").should("not.be.disabled").click();
		cy.getElement("signin_error_message")
			.should("be.visible")
			.should("contain.text", "Email is required");

		cy.getElement("email_input")
			.should("not.be.disabled")
			.type("demo2@gmail.com"); //wrong email credentials
		cy.getElement("signin_user_button").click().should("be.disabled");
		cy.getElement("email_input").should("be.disabled");
		cy.getElement("signin_error_message")
			.should("be.visible")
			.should("have.text", "An error occurred");
	});

	it("should signIn user successfully", () => {
		cy.intercept(
			"POST",
			`${Cypress.env("SATSATAI_MS_USER")}/api/auth/login/request`,
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
		cy.getElement("signin_user_button").should("not.be.disabled").click();
		cy.getElement("signin_error_message")
			.should("be.visible")
			.should("contain.text", "Email is required");

		cy.fixture("signInUserEmail").then((data) => {
			cy.getElement("email_input").should("not.be.disabled").type(data.email);
			cy.getElement("signin_user_button").click().should("be.disabled");
		});
		cy.location("pathname").should("equal", "/signin/user_verification");

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
			cy.location("pathname").should("equal", "/dashboard");
		});
	});
});
