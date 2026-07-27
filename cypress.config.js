const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({

  // Grava vídeos durante a execução em modo headless
  video: true,

  // Gera screenshot automaticamente quando um teste falha
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://automationexercise.com",

    // Executa arquivos .feature e também .cy.js
    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.js",
    ],

    supportFile: "cypress/support/e2e.js",

    setupNodeEvents,
  },
});