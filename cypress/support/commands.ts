/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("getElement", (eleId: string) => {
	return cy.get(`[data-test="${eleId}"]`);
});
Cypress.Commands.add(
	"targetElementNavigate",
	(dropDownId: string, eleId: string) => {
		return cy
			.getElement(dropDownId)
			.should("be.visible")
			.getElement(eleId)
			.visit(`${eleId}`);
	}
);

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

export {};
declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 *Get an element from the dom using  data-test attr
			 * @eleId is a data-test name.
			 * This command:
			 * cy.getElement("pricing-button"), will select an element with a [data-test="pricing-button"]
			 **/

			getElement(eleId: string): Chainable<JQuery<HTMLElement>>;

			/**
			 *dropDownId Gets an a dropdown element from nav using the data-test attr and check if its visible.
			 * @eleId is a data-test name.
			 * @dropDownId is a dropdown element
			 * 
			 * command e.g:
			 *  cy
			.getElement(dropDownId)
			.should("be.visible")
			.getElement(eleId)
			.click()
			.visit(`/feature/${eleId}`);"
			 **/

			targetElementNavigate(
				dropDownId: string,
				eleId: string
			): Chainable<Cypress.AUTWindow>;
			// drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
			// dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
			// visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
		}
	}
}
