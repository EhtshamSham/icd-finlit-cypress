/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on) => {
  on("task", {
    dbQuery: (query) =>
      require("cypress-postgres")(query.query, query.connection),
  });
};
