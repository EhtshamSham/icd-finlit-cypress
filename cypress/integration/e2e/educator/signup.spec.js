/// <reference types="cypress" />

describe("Signup", () => {
    beforeEach(() => {
      cy.visit("/signup");
      cy.fixture("unregisteredUser").as("unregisteredUser");
    });
  
    it("should sign up With unregistered email and correct password", () => {
      cy.get("@unregisteredUser").then((unregisteredUser) => {
        cy.signupStudent(unregisteredUser[1].email, unregisteredUser[1].firstName, unregisteredUser[1].lastName,unregisteredUser[1].password,unregisteredUser[1].confirmPassword);       
        cy.wait(5000);
        cy.get('.Toastify__toast-body');
     cy.should('contain','Kindly');
      });
    });

    
    it("should sign up With registered email and correct password", () => {
      cy.get("@unregisteredUser").then((unregisteredUser) => {
        cy.signupStudent(unregisteredUser[2].email, unregisteredUser[2].firstName, unregisteredUser[2].lastName,unregisteredUser[2].password,unregisteredUser[2].confirmPassword);       
        cy.wait(5000);
        cy.get('.Toastify__toast-body');
     cy.contains('User with the same email already exists');
      });
    });
/*
    it("should sign up With registered email and incorrect matching password", () => {
      cy.get("@unregisteredUser").then((unregisteredUser) => {
        cy.signupStudent(unregisteredUser[3].email, unregisteredUser[3].firstName, unregisteredUser[3].lastName,unregisteredUser[3].password,unregisteredUser[3].confirmPassword);       
       cy.get('.form_err > .error');
     cy.contains('**Password does not match');
      });
    });

    it("should sign up With incorrect email and correct password", () => {
      cy.get("@unregisteredUser").then((unregisteredUser) => {
        cy.signupStudent(unregisteredUser[4].email, unregisteredUser[4].firstName, unregisteredUser[4].lastName,unregisteredUser[4].password,unregisteredUser[4].confirmPassword);       
        cy.wait(5000);
      cy.get('.Toastify__toast-body');
     cy.should('contain','email must be');
      });
    });


    it("should sign up with empty fields", () => {

       cy.get('.btn').click();
     cy.contains('Email is required');
      });
    

*/
//sign up instructor





  });



      
  
   
  
  