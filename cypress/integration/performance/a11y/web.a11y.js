/// <reference types="cypress" />

describe("A11y", () => {
  it("login page is accessible", () => {
    cy.visit("/login");
    cy.checkPageA11y();
  });

  it("signup page is accessible", () => {
    cy.visit("/signup");
    cy.checkPageA11y();
  });
});
