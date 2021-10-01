import "cypress-audit/commands";

// -- api --
Cypress.Commands.add("addUser", (body) => {
  cy.request({
    method: "POST",
    url: "http://61.85.154.156:3016/api/auth/register",
    headers: {
      "content-type": "application/json",
    },
    body,
  });
});
Cypress.Commands.add("deleteUser", (email) => {
  cy.task("dbQuery", {
    query: `DELETE from users_roles WHERE \"usersId"\ = (SELECT  id FROM users WHERE email='${email}') ;`,
  });
  cy.task("dbQuery", {
    query: `delete from users  where email='${email}';) ;`,
  });
});

// -- ui --
Cypress.Commands.add(
  "signupInstructor",
  (
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    address,
    country,
    gender,
    profession
  ) => {
    cy.get("#email").type(email);
    cy.get(":nth-child(1) > .form-group > #name").type(firstName);
    cy.get(":nth-child(2) > .form-group > #name").type(lastName);
    cy.get("#createpassword").type(password);
    cy.get("#confirmpassword").type(confirmPassword);
    cy.get(".MuiSelect-root").click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
    cy.get(
      ":nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    ).click();
    cy.get('[data-value="KSA"]').click();
    cy.get("#address").type(address);
    cy.get(
      ":nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    ).click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
    cy.get(
      ":nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    ).click();
    cy.get('[data-value="Medical and Health Services"]').click();

    cy.get(".btn").click();
  }
);

Cypress.Commands.add(
  "signupStudent",
  (email, firstName, lastName, password, confirmPassword) => {
    cy.get("#email").type(email);
    cy.get(":nth-child(1) > .form-group > #name").type(firstName);
    cy.get(":nth-child(2) > .form-group > #name").type(lastName);
    cy.get(".MuiSelect-root").click();
    cy.get(".Mui-selected").click();
    cy.get("#createpassword").type(password);
    cy.get("#confirmpassword").type(confirmPassword);
    cy.get(".btn").click();
  }
);

Cypress.Commands.add("login", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get(".btn").click();
});

// -- accessibility --

const severityIndicator = {
  minor: "⚪",
  moderate: "🟡",
  serious: "🟠",
  critical: "🔴",
};

function callback(violations) {
  violations.forEach((violation) => {
    const nodes = Cypress.$(
      violation.nodes.map((node) => node.target).join(",")
    );
    Cypress.log({
      name: `${severityIndicator[violation.impact]} A11y`,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`,
    });
  });
}

Cypress.Commands.add("checkPageA11y", () => {
  cy.injectAxe();
  cy.checkA11y(null, null, callback);
});
