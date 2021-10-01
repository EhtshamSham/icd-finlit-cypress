/// <reference types="cypress" />

describe("Signup", () => {
  let email = "t1@yopmail.com";
  beforeEach(() => {
    cy.visit("/signup");
    cy.deleteUser(email);
  });

  it("should register user", () => {
    cy.registerStudent(email, "Test", "User", "Test@12345", "Test@12345");
  });

  afterEach(() => {
    cy.deleteUser(email);
  });
});
