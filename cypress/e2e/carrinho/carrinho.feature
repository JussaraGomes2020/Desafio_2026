Feature: Carrinho de compras

  Como um cliente da loja
  Quero adicionar produtos ao carrinho
  Para realizar uma compra

  Scenario: Adicionar um produto ao carrinho com sucesso
    Given que estou na página de produtos
    When adiciono o produto "Blue Top" ao carrinho
    And acesso o carrinho de compras
    Then devo visualizar o produto "Blue Top" no carrinho
    And o produto deve apresentar o preço correto
    And a quantidade do produto deve ser igual a 1
  