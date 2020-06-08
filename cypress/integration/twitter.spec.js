describe("Retweet twitter tweet", () => {
  it("Success retweet first tweet", () => {
    cy.visit("/");
    // login
    cy.login();
    // open first tweet
    cy.get("[data-testid=tweet]", { timeout: 10000 }).first().click();
    cy.get("[data-testid=retweet]").first().click();
    cy.get("[data-testid=retweetConfirm]").should("be.visible").click();
    // logout
    cy.logout();
  });
});
