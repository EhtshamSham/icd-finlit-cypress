/// <reference types="cypress" />

const serverDomain = "c0sxzwsh.mailosaur.net";
let emailAddress = "testUser@" + serverDomain;

describe("student signup", () => {
  beforeEach(() => {
    cy.visit("signup");
    cy.deleteUser(emailAddress);
  });

  it("with valid input values", () => {
    cy.registerStudent(
      emailAddress,
      "Test",
      "User",
      "Test@12345",
      "Test@12345"
    );
    cy.get("h4 > span").should("have.text", "Your email has been verified");
  });

  afterEach(() => {
    cy.deleteUser(emailAddress);
  });
});

describe("educator signup", () => {
  beforeEach(() => {
    cy.visit("signup");
    cy.deleteUser(emailAddress);
  });

  it("with valid input values", () => {
    cy.registerInstructor(
      emailAddress,
      "Test",
      "User",
      "Test@12345",
      "Test@12345",
      "Test address"
    );
    cy.get("h4 > span").should("have.text", "Your email has been verified");
  });

  afterEach(() => {
    cy.deleteUser(emailAddress);
  });
});
