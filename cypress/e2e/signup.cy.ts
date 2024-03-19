import "../support/commands";

describe("resend email verification code and verify", () => {
	it("signs up a user and resend email ", () => {
		cy.visit("/");
		cy.getElement("pricing-button")
			.should("not.be.disabled")
			.visit("choose-your-pricing");
		cy.getElement("category-free")
			.should("not.be.disabled")
			.visit("/signup?plan=free");
		cy.intercept(
			"GET",
			`${Cypress.env("SATSATAI_MS_USER")}/countries/index`,
			(req) => {
				req.reply({
					statusCode: 200,
					body: {
						country_id: "c8204c9f-77e8-4c55-8ea0-bd947bb84e2f",
					},
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("countryId");
		cy.wait("@countryId");
		cy.getElement("signUpButton").click();
		cy.getElement("fullName-error").should("be.visible");
		cy.getElement("email-error").should("be.visible");
		cy.getElement("phone-error").should("be.visible");
		cy.fixture("userCredentials").then((data) => {
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("fullName-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("fullName").type(data.name);
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("email").type(data.email);
			cy.getElement("signUpButton").click();
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("phone").type(data.phone);
			// signup user and move to verification step

			cy.intercept("POST", "/api/auth/register", (req) => {
				req.reply({
					fixture: "userCredentials.json",
					statusCode: 201,
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}).as("registerUser");
			cy.getElement("signUpButton").click().should("be.disabled");
			cy.getElement("fullName").should("be.disabled");
			cy.getElement("email").should("be.disabled");
			cy.getElement("phone").should("be.disabled");

			cy.wait("@registerUser").then(() => {
				cy.visit(`/signup/verify?plan=free&userId=${data.id}`);
				cy.intercept(
					"GET",
					`${Cypress.env("SATSATAI_MS_USER")}/users/${data.id}`,
					(req) => {
						req.reply({
							statusCode: 200,
							fixture: "userUnverified.json",
							Headers: {
								"Content-Type": "application/json",
							},
						});
					}
				).as("verifyUserEmail");
				cy.wait("@verifyUserEmail");
			});
			cy.intercept(
				"GET",
				`${Cypress.env("SATSATAI_MS_USER")}/user/email/verify/${data.id}`,
				(req) => {
					req.reply({
						statusCode: 200,
						fixture: "emailToken.json",
						Headers: {
							"Content-Type": "application/json",
						},
					});
				}
			).as("emailVerificationToken");

			cy.getElement("verifyEmailButton").should("not.be.disabled").click();
			cy.getElement("emailCodeError")
				.should("exist")
				.should("have.text", "verification code is required");

			cy.getElement("resendEmailButton").should("not.be.disabled").click();
			cy.wait("@emailVerificationToken").then((interception) => {
				expect(interception.response?.statusCode).to.equal(200);
				cy.getElement("modal").should("not.be.disabled").click();
				cy.getElement("email-verification-code").type(
					interception.response?.body.emailToken
				);
			});
			cy.intercept(
				"POST",
				`${Cypress.env("SATSATAI_MS_USER")}/user/email/verify`,
				(req) => {
					req.reply({
						statusCode: 200,
						body: {
							token: data.emailToken,
							email: data.email,
						},
						Headers: {
							"Content-Type": "application/json",
						},
					});
				}
			).as("submitEmailVerification");

			cy.intercept(
				"GET",
				`${Cypress.env("SATSATAI_MS_USER")}/user/phone/request-code/${data.id}`,
				(req) => {
					req.reply({
						statusCode: 200,
						Headers: {
							"Content-Type": "application/json",
						},
					});
				}
			).as("requestPhoneCode");

			cy.getElement("verifyEmailButton").click().should("be.disabled");
			cy.wait("@submitEmailVerification");
			cy.wait("@requestPhoneCode");
		});
	});
});

describe("resend phone verification code and verify", () => {
	it("signs up a user and resend email ", () => {
		cy.visit("/");
		cy.getElement("pricing-button")
			.should("not.be.disabled")
			.visit("choose-your-pricing");
		cy.getElement("category-plus")
			.should("not.be.disabled")
			.visit("/signup?plan=plus");

		cy.intercept(
			"GET",
			`${Cypress.env("SATSATAI_MS_USER")}/countries/index`,
			(req) => {
				req.reply({
					statusCode: 200,
					body: {
						country_id: "c8204c9f-77e8-4c55-8ea0-bd947bb84e2f",
					},
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("countryId");
		cy.wait("@countryId");
		cy.getElement("signUpButton").click();
		cy.getElement("fullName-error").should("be.visible");
		cy.getElement("email-error").should("be.visible");
		cy.getElement("phone-error").should("be.visible");
		cy.fixture("userCredentials").then((data) => {
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("fullName-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("fullName").type(data.name);
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("email").type(data.email);
			cy.getElement("signUpButton").click();
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("phone").type(data.phone);

			cy.intercept("POST", "/api/auth/register", (req) => {
				req.reply({
					fixture: "userCredentials.json",
					statusCode: 201,
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}).as("registerUser");

			cy.getElement("signUpButton").click().should("be.disabled");
			cy.getElement("fullName").should("be.disabled");
			cy.getElement("email").should("be.disabled");
			cy.getElement("phone").should("be.disabled");
			//signup user and move to verification step
			cy.wait("@registerUser").then(() => {
				cy.visit(`/signup/verify?plan=plus&userId=${data.id}`);
				cy.intercept(
					"GET",
					`${Cypress.env("SATSATAI_MS_USER")}/users/${data.id}`,
					(req) => {
						req.reply({
							statusCode: 200,
							fixture: "userVerifiedEmail.json",
							Headers: {
								"Content-Type": "application/json",
							},
						});
					}
				).as("verifyUser");
				cy.wait("@verifyUser");
			});

			cy.intercept(
				"GET",
				`${Cypress.env("SATSATAI_MS_USER")}/user/phone/request-code/${data.id}`,
				(req) => {
					req.reply({
						statusCode: 200,
						fixture: "userVerifiedEmail",
						Headers: {
							"Content-Type": "application/json",
						},
					});
				}
			).as("ResendOTPCode");

			cy.getElement("verifyOtp").should("not.be.disabled").click();
			cy.getElement("optErrorMessage")
				.should("exist")
				.should("have.text", "An OTP code is required");
			cy.getElement("resendOtp").should("not.be.disabled").click();
			cy.wait("@ResendOTPCode").then((interception) => {
				expect(interception.response?.statusCode).to.equal(200);
				cy.getElement("optVerificationInput")?.type(
					interception.response?.body?.user.phone_verification_code
				);
			});
			cy.intercept(
				"POST",
				`${Cypress.env("SATSATAI_MS_USER")}/user/phone/verify`,
				(req) => {
					req.reply({
						body: {
							phone: data.phone,
							code: data.phone_verification_code,
						},
					});
				}
			).as("submitPhoneVerification");

			cy.getElement("verifyOtp").click().should("be.disabled");
			cy.wait("@submitPhoneVerification");
		});
	});
});

describe("complete user signup flow", () => {
	it("signsUp a new user", function () {
		cy.visit("/");
		cy.getElement("pricing-button")
			.should("not.be.disabled")
			.visit("/choose-your-pricing");
		cy.getElement("toggle-switch").should("not.be.disabled").click();
		cy.getElement("category-pro")
			.should("not.be.disabled")
			.visit("/signup?plan=pro");

		cy.intercept(
			"GET",
			`${Cypress.env("SATSATAI_MS_USER")}/countries/index`,
			(req) => {
				req.reply({
					statusCode: 200,
					body: {
						country_id: "c8204c9f-77e8-4c55-8ea0-bd947bb84e2f",
					},
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}
		).as("countryId");
		cy.wait("@countryId");

		cy.getElement("signUpButton").click();
		cy.getElement("fullName-error").should("be.visible");
		cy.getElement("email-error").should("be.visible");
		cy.getElement("phone-error").should("be.visible");
		cy.fixture("userCredentials").then((data) => {
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("fullName-error")
				.should("exist")
				.should("have.text", "Field is required");

			cy.getElement("fullName").type(data.name);
			cy.getElement("signUpButton").click();
			cy.getElement("email-error")
				.should("exist")
				.should("have.text", "Field is required");
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("email").type(data.email);
			cy.getElement("signUpButton").click();
			cy.getElement("phone-error")
				.should("exist")
				.should("have.text", "Phone is required");
			cy.getElement("phone").type(data.phone);

			cy.intercept("POST", "/api/auth/register", (req) => {
				req.reply({
					fixture: "userCredentials.json",
					statusCode: 201,
					Headers: {
						"Content-Type": "application/json",
					},
				});
			}).as("registerUser");

			cy.getElement("signUpButton").click().should("be.disabled");
			cy.getElement("fullName").should("be.disabled");
			cy.getElement("email").should("be.disabled");
			cy.getElement("phone").should("be.disabled");

			//register user
			cy.wait("@registerUser").then(() => {
				cy.visit(`/signup/verify?plan=${data.starting_plan}&userId=${data.id}`);
				//get user and update verification step
				cy.intercept(
					"GET",
					`${Cypress.env("SATSATAI_MS_USER")}/users/${data.id}`,
					(req) => {
						req.reply({
							statusCode: 200,
							fixture: "userVerificationComplete.json",
							Headers: {
								"Content-Type": "application/json",
							},
						});
					}
				).as("verifyUser");
				cy.wait("@verifyUser");
				cy.getElement("finishingUpButton").visit("/signin");
			});
		});
	});
});
