Feature: Checkout

  Como um cliente autenticado
  Quero finalizar a compra dos produtos adicionados ao carrinho
  Para concluir meu pedido

  Scenario: Finalizar compra com sucesso

    Given que o usuário está autenticado
    And que possui o produto "Blue Top" no carrinho
    And acessa a tela de Checkout

    When prossegue para o pagamento

    Then devo visualizar os dados de entrega cadastrados
    And devo visualizar o produto "Blue Top" adicionado ao carrinho
    And devo visualizar o resumo da compra com preço "Rs. 500", quantidade 1 e total "Rs. 500"