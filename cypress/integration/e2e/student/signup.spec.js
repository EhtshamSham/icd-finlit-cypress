/// <reference types="cypress" />

describe("Signup", () => {
  beforeEach(() => {
    cy.visit("/signup");
    cy.fixture("InstructorUser").as("InstructorUser");
  });

  it("should sign up With registered email and correct password", () => {
    cy.get("@InstructorUser").then((InstructorUser) => {
      cy.signupInstructor(
        InstructorUser[0].email,
        InstructorUser[0].firstName,
        InstructorUser[0].lastName,
        InstructorUser[0].password,
        InstructorUser[0].confirmPassword,
        InstructorUser[0].address
      );
      cy.wait(5000);
      cy.get(".Toastify__toast-body");
      cy.should("contain", "Kindly");
    });
  });
});
