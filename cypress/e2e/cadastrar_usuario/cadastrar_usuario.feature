Feature: Cadastro de usuário

  Como um visitante da loja
  Quero criar uma nova conta
  Para realizar compras na aplicação

  Background:
    Given que acesso a página de Login e Cadastro

  Scenario: Acessar a tela de Login e Cadastro
    Then devo visualizar a tela de Login e Cadastro

  Scenario: Iniciar o cadastro de um novo usuário
    When informo os dados iniciais do cadastro
    And clico no botão Signup
    Then devo visualizar a tela de criação da conta

  Scenario: Cadastrar um novo usuário com sucesso
    When inicio um novo cadastro
    And preencho os dados da conta
    And clico em Create Account
    Then a conta deverá ser criada com sucesso