import { ENDPOINTS } from "../../utils/endpoints";

describe("API Trello", () => {

  it("Deve retornar o nome da lista e status 200", () => {

    cy.request({
      method: "GET",
      url: ENDPOINTS.ACTIONS,
      qs: {
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
      timeout: 60000,
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.data.list.name).to.eq("Professional");

      cy.log(`Nome da lista: ${response.body.data.list.name}`);

    });

  });

});