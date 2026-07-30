Feature: Login

  Background:
    Given que acesso a página de login

  Scenario: Login realizado com sucesso
    When realizo o login com um usuário válido
    Then devo visualizar que o usuário está autenticado

  Scenario: Login inválido
    When realizo o login com um usuário inválido
    Then devo visualizar uma mensagem de login inválido