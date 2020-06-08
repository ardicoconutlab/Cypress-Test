// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.get("[data-testid=login]").click();
  cy.url().should("eq", "https://twitter.com/login");
  cy.get('input[name="session[username_or_email]"][type=text]')
    .should("be.visible")
    .type(Cypress.env("email"))
    .should("have.value", Cypress.env("email"));
  cy.get('input[name="session[password]"][type=password]')
    .should("be.visible")
    .type(Cypress.env("password"))
    .should("have.value", Cypress.env("password"));
  cy.get("[data-testid=LoginForm_Login_Button]")
    .first()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("logout", () => {
  cy.get("[data-testid='SideNav_AccountSwitcher_Button']").click();
  cy.get("[data-testid=AccountSwitcher_Logout_Button]").click();
  cy.url().should("eq", "https://twitter.com/logout");
  cy.get("[data-testid=confirmationSheetConfirm]").click();
});
