export const ENDPOINTS = {
  ACTIONS: `https://api.trello.com/1/actions/${Cypress.env("TRELLO_ACTION_ID")}?key=${Cypress.env("TRELLO_KEY")}&token=${Cypress.env("TRELLO_TOKEN")}`,
};