/// <reference types="cypress" />

describe("A11y", () => {
  it("signup page is accessible", () => {
    cy.checkPageA11y("/login");
  });
});
