/// <reference types="cypress" />

const { lighthouse, prepareAudit } = require("cypress-audit");

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on) => {
  on("task", {
    dbQuery: (query) =>
      require("cypress-postgres")(query.query, query.connection),
  });
};

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(),
  });
};
