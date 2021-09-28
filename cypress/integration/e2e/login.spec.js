/// <reference types="cypress" />

describe("Verify the login functionality of any user", () => {
  beforeEach(() => {
    cy.visit("http://61.85.154.156:3021/login");
    cy.fixture("registeredUser").as("registeredUser");
  });

  it("should login With registered email and correct password", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login(registeredUser[0].email, registeredUser[0].password);
    });
  });

  it("should not login With unregistered email and correct password", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login("testemail@yopmail.com", registeredUser[0].password);
    });
  });

  it("should not login With registered email and incorrect password", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login(registeredUser[1].email, "dummypassword");
    });
  });
});
