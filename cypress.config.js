const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Plugin do Cucumber
  await addCucumberPreprocessorPlugin(on, config);

  // Plugin do Mochawesome
  require("cypress-mochawesome-reporter/plugin")(on);

  // Pré-processador do Cucumber
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  // Reporter
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    charts: true,
    reportPageTitle: "Relatório de Automação",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // Vídeos
  video: true,

  // Screenshots automáticos
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://automationexercise.com",

    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.js",
    ],

    supportFile: "cypress/support/e2e.js",

    setupNodeEvents,
  },
});