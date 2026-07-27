import { ENDPOINTS } from "../../utils/endpoints";

describe("API Trello", () => {

  it("Deve retornar o nome da lista e status 200", () => {

    cy.request("GET", ENDPOINTS.ACTIONS).then((response) => {

      const body = response.body;

      // Validação do status code
      expect(response.status).to.eq(200);

      // Validação do conteúdo retornado
      expect(body.data.list.name).to.eq("Professional");

      // Exibe o nome da lista
      cy.log(`Nome da lista: ${body.data.list.name}`);

    });

  });

});