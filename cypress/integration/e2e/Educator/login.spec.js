/// <reference types="cypress" />

describe("Login", () => {
  let educatorUser
  before(function () {
    cy.fixture("educator").then(function (educator) {
      cy.deleteUser(educator.email)
      cy.addUser(educator)
      //cy.verifyEmail(educator.email)
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
