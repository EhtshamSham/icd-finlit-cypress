/// <reference types="cypress" />

describe("Signup", () => {
    beforeEach(() => {
      cy.visit("/signup");
      cy.fixture("InstructorUser").as("InstructorUser");
    });

    it("should sign up With registered email and correct password", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[0].email, InstructorUser[0].firstName, InstructorUser[0].lastName,InstructorUser[0].password,InstructorUser[0].confirmPassword,InstructorUser[0].address);       
        cy.wait(5000);
        cy.get('.Toastify__toast-body');
     cy.should('contain','Kindly');
      });
    });


    it("should sign up With unregistered email and correct password", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[1].email, InstructorUser[1].firstName, InstructorUser[1].lastName,InstructorUser[1].password,InstructorUser[1].confirmPassword,InstructorUser[1].address);       
        cy.wait(5000);
       cy.get('.Toastify__toast-body');
     cy.should('contain','already exist');
      });
    });
/*
    it("should sign up With incorrect email and correct password", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[2].email, InstructorUser[2].firstName, InstructorUser[2].lastName,InstructorUser[2].password,InstructorUser[2].confirmPassword,InstructorUser[2].address);       
        cy.wait(5000);
      cy.get('.Toastify__toast-body');
     cy.should('contain','email must be');
      });
    });
8
    


    it("should sign up With registered email and incorrect matching password", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[3].email, InstructorUser[3].firstName, InstructorUser[3].lastName,InstructorUser[3].password,InstructorUser[3].confirmPassword,InstructorUser[3].address);       
       cy.get('.form_err > .error');
     cy.contains('**Password does not match');
      });
    });


    it("should sign up With registered email and incorrect password", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[4].email, InstructorUser[4].firstName, InstructorUser[4].lastName,InstructorUser[4].password,InstructorUser[4].confirmPassword,InstructorUser[4].address);       
        cy.get(':nth-child(4) > .error')
     cy.contains('Password must contains');
      });
    });


    it("first name and last name field verification. ", () => {
      cy.get("@InstructorUser").then((InstructorUser) => {
        cy.signupInstructor(InstructorUser[5].email, InstructorUser[5].firstName, InstructorUser[5].lastName,InstructorUser[5].password,InstructorUser[5].confirmPassword,InstructorUser[5].address);       
        cy.get(':nth-child(1) > .form-group > .error');
     cy.contains('not valid');
      });
    });

/*
    it("should sign up with empty fields", () => {

       cy.get('.btn').click();
     cy.contains('Email is required');
      })*/
    








  });



      
  
   
  
  