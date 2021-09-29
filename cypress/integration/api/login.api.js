/// <reference types = "Cypress"/>

describe("Requests suite", () => {
  it("Post request", () => {
    cy.request({
      method: "POST",
      url: "http://61.85.154.156:3016/api/auth/login",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "77dddd44a6msh0eec8f31a8c887cp1ec9d8jsn39d7a327deeb",
      },
      body: {
        email: "t1@yopmail.com",
        password: "RNSsol@123",
      },
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      cy.log(response)
    });
  });
});
