/// <reference types="cypress" />

describe("A11y", () => {
  it("home page is accessible", () => {
    cy.checkPageA11y("http://61.85.154.156:3021/");
  });
});
