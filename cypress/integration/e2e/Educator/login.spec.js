/// <reference types="cypress" />

describe("Login", () => {
    
   before(()=>{

    // cy.fixture('educator').then ((educator)=>{
    //     this.educator=educator
    // });
   
   
    beforeEach(() => {
      cy.visit("/login");
      cy.addUser(this.educator);
    });
  
    it("should login successfully", () => {
      cy.login(this.educator.email, this.educator.password);

    });
  
   // afterEach(() => {
   //   cy.deleteUser(email);
   });
});