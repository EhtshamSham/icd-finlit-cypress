/// <reference types="cypress" />

describe("Verify the Sign up functionality of any user", () => {
    beforeEach(() => {
      cy.visit("http://61.85.154.156:3021/signup");
      cy.fixture("UnregisteredUser").as("UnregisteredUser");
    });
  
    it("should sign up With registered email and correct password", () => {
      cy.get("@UnregisteredUser").then((UnregisteredUser) => {
        cy.signupinstructor(UnregisteredUser[2].email, UnregisteredUser[2].firstName, UnregisteredUser[2].lastName,UnregisteredUser[2].password,UnregisteredUser[2].confirmPassword);
       
      });
    });
  
   
  });
  