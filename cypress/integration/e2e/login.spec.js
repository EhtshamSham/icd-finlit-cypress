/// <reference types="cypress" />

describe("Student login", () => {
    let studentUser
    before(function () {
      cy.fixture("student").then(function (student) {
        cy.deleteUser(student.email)
        cy.addUser(student)
        cy.log(student.email)
        cy.verifyEmail(student.email)
        studentUser = student;
      });
    });
  
    beforeEach(() => {
      cy.visit("/login");
    });
  
    it("should login successfully", () => {
      cy.login(studentUser.email, studentUser.password);
    });
  
    after(() => {
      cy.deleteUser(studentUser.email)
    })
  });
  
  describe("Educator login", () => {
    let educatorUser
    before(function () {
      cy.fixture("educator").then(function (educator) {
        cy.deleteUser(educator.email)
        cy.addUser(educator)
        cy.log(educator.email)
        cy.verifyEmail(educator.email)
        educatorUser = educator;
      });
    });
  
    beforeEach(() => {
      cy.visit("/login");
    });
  
    it("should login successfully", () => {
      cy.login(educatorUser.email, educatorUser.password);
    });
  
    after(() => {
      cy.deleteUser(educatorUser.email)
    })
  });