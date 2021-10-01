/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("registeredUser").as("registeredUser");
  });

  it("login With registered email and correct password for student", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login(registeredUser[0].email, registeredUser[0].password);
    });
  });
});
