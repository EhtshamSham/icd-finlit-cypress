/// <reference types="cypress" />

describe("Signup", () => {
  let email = "t1@yopmail.com";
  beforeEach(() => {
    cy.visit("/signup");
    cy.deleteUser(email);
  });

  it("should register user", () => {
    cy.registerStudent(email, "Test", "User", "Test@12345", "Test@12345");
    cy.get(".Toastify__toast-body").should(
      "have.text",
      "Email has been sent to you for verification, Kindly verify your email to get access to the system."
    );
  });

  afterEach(() => {
    cy.deleteUser(email);
  });
});
