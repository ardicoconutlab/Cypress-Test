describe("Retweet twitter tweet", () => {
  it("Success retweet first tweet", () => {
    // login
    cy.visit("/");
    cy.get("[data-testid=login]").click();
    cy.url().should("eq", "https://twitter.com/login");
    cy.get(".r-1jgb5lz").within(() => {
      cy.get('input[name="session[username_or_email]"]')
        .type(Cypress.env("email"))
        .should("have.value", Cypress.env("email"));
      cy.get('input[name="session[password]"]')
        .type(Cypress.env("password"))
        .should("have.value", Cypress.env("password"));
      cy.get("[data-testid=LoginForm_Login_Button]").click();
    });
    // retweet first tweet
    cy.get("[data-testid=retweet]").first().click();
    cy.get("[data-testid=retweetConfirm]").should("be.visible").click();
    cy.get(".r-j66t93 > .r-1twgtwe").click();
    // logout
    cy.get(".r-1azx6h > div.r-1w50u8q").within(() => {
      cy.get("[data-testid=AccountSwitcher_Logout_Button]")
        .should("be.visible")
        .click();
    });
    cy.url().should("eq", "https://twitter.com/logout");
    cy.get("[data-testid=confirmationSheetConfirm]").click();
  });
});
