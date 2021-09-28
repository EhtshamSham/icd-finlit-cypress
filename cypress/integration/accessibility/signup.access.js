/// <reference types="cypress" />

describe("A11y", () => {
  it("signup page is accessible", () => {
    cy.checkPageA11y("http://61.85.154.156:3021/signup");
  });
});
