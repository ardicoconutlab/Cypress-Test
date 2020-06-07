describe("Retweet twitter tweet", () => {
  it("Success retweet first tweet", () => {
    // login
    cy.visit("/");
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
    // open first tweet
    cy.get("[data-testid=tweet]", { timeout: 10000 }).first().click();
    cy.get("[data-testid=retweet]").first().click();
    cy.get("[data-testid=retweetConfirm]").should("be.visible").click();
    // logout
    cy.get("[data-testid='SideNav_AccountSwitcher_Button']").click();
    cy.get("[data-testid=AccountSwitcher_Logout_Button]").click();
    cy.url().should("eq", "https://twitter.com/logout");
    cy.get("[data-testid=confirmationSheetConfirm]").click();
  });
});
