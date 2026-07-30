import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/LoginPage";

let loginData;

beforeEach(() => {
  cy.fixture("login/login").then((fixture) => {
    loginData = fixture;
  });
});

Given("que acesso a página de login", () => {
  LoginPage.acessarTelaLogin();
});

When("realizo o login com um usuário válido", () => {
  LoginPage.realizarLogin(
    loginData.usuarioValido.email,
    loginData.usuarioValido.senha
  );
});

When("realizo o login com um usuário inválido", () => {
  LoginPage.realizarLogin(
    loginData.usuarioInvalido.email,
    loginData.usuarioInvalido.senha
  );
});

Then("devo visualizar que o usuário está autenticado", () => {
  LoginPage.validarLoginRealizado();
});

Then("devo visualizar uma mensagem de login inválido", () => {
  LoginPage.validarMensagemLoginInvalido();
});