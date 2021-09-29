/// <reference types="cypress" />

describe("Signup", () => {
    beforeEach(() => {
      cy.visit("/signup");
      cy.fixture("unregisteredUser").as("unregisteredUser");
    });
  
    it("should sign up With registered email and correct password", () => {
      cy.get("@unregisteredUser").then((unregisteredUser) => {
        cy.registerEducator(unregisteredUser[2].email, unregisteredUser[2].firstName, unregisteredUser[2].lastName,unregisteredUser[2].password,unregisteredUser[2].confirmPassword);       
      });
    });
  
   
  });
  