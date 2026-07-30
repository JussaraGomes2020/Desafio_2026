# Desafio Técnico QA – Automação Web e API com Cypress

## Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar conhecimentos em **Qualidade de Software (QA)**, contemplando a automação de testes funcionais Web e testes de API utilizando **Cypress**.

A solução foi estruturada priorizando organização, reutilização de código, facilidade de manutenção e escalabilidade, aplicando o padrão **Page Object Model (POM)** para os testes Web e **BDD (Behavior Driven Development)** com **Cucumber** para descrição dos cenários.

Além dos fluxos Web, foi implementado um teste automatizado de API utilizando o comando `cy.request()`, realizando validações da resposta e dos dados retornados.

---

# Tecnologias utilizadas

- JavaScript (ES6+)
- Node.js
- npm
- Cypress
- Cucumber
- Esbuild
- Git
- GitHub

---

# Ambiente

| Tecnologia | Versão |
|------------|---------|
| Node.js | 24.18.0 |
| npm | 11.16.0 |
| Cypress | 15.19.0 |
| JavaScript | ES6+ |
| @badeball/cypress-cucumber-preprocessor | 26.0.0 |
| @bahmutov/cypress-esbuild-preprocessor | 2.2.8 |
| Esbuild | 0.28.1 |

---

# Arquitetura da solução

O projeto foi estruturado utilizando o padrão **Page Object Model (POM)**, promovendo a separação entre regras de negócio, elementos da interface e cenários de teste.

Essa abordagem proporciona:

- Separação de responsabilidades;
- Reutilização de código;
- Facilidade de manutenção;
- Melhor legibilidade;
- Redução de duplicidade;
- Escalabilidade para inclusão de novos cenários.

Os testes Web foram desenvolvidos utilizando **BDD (Behavior Driven Development)** com **Cucumber**, enquanto os testes de API utilizam os recursos nativos do Cypress através do comando `cy.request()`.

---

# Estrutura do projeto

```text
DESAFIO_CYPRESS
│
├── cypress
│   ├── e2e
│   │   ├── api
│   │   │   └── trello.cy.js
│   │   ├── cadastrar_usuario
│   │   ├── carrinho
│   │   ├── checkout
│   │   ├── login
│   │   ├── pages
│   │   ├── produtos
│   │   └── services
│   │
│   ├── fixtures
│   ├── support
│   └── utils
│       ├── constantes.js
│       ├── endpoints.js
│       ├── faker.js
│       └── helpers.js
│
├── package.json
├── cypress.config.js
└── README.md
```

---

# Pré-requisitos

Antes da execução do projeto é necessário possuir instalado:

- Node.js 24.18.0 ou superior
- npm 11.16.0 ou superior
- Git

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/JussaraGomes2020/Desafio_2026.git
```

Acesse a pasta do projeto:

```bash
cd Desafio_2026
```

Instale as dependências:

```bash
npm install
```

---

# Execução dos testes

## Abrir o Cypress (modo interativo)

```bash
npm run cy:open
```

ou

```bash
npx cypress open
```

---

## Executar todos os testes (modo headless)

```bash
npm run cy:run
```

ou

```bash
npx cypress run
```

---

## Executar apenas os testes Web

```bash
npx cypress run --spec "cypress/e2e/**/*.feature"
```

---

## Executar apenas o teste de API

```bash
npx cypress run --spec "cypress/e2e/api/trello.cy.js"
```

---

# Cenários automatizados

## Testes Web

Os seguintes fluxos foram automatizados:

- Login
- Cadastro de usuário
- Produtos
- Carrinho
- Checkout

Os cenários foram escritos em **Gherkin** e implementados utilizando **Cucumber**, seguindo a abordagem **BDD**.

---

## Testes de API

Foi automatizado o consumo de um endpoint público do Trello.

### Endpoint

```http
GET https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

### Validações realizadas

- Status Code **200**
- Validação do campo:

```json
data.list.name
```

Valor esperado:

```text
Professional
```

Durante a execução também é exibido no log o valor retornado pela API:

```javascript
cy.log(`Nome da lista: ${response.body.data.list.name}`);
```

---

# Boas práticas adotadas

- Page Object Model (POM)
- BDD com Cucumber
- Organização por responsabilidade
- Separação entre testes Web e API
- Centralização de endpoints
- Reutilização de código
- Utilização de Fixtures
- Utilização de utilitários compartilhados
- Estrutura escalável
- Código organizado para facilitar manutenção
- Validação de respostas da API

---

# Evidências

As evidências de execução podem ser armazenadas na pasta:

```text
evidencias/
├── web-tests.png
└── api-trello.png
```

Após adicionar as imagens, basta referenciá-las no README:

```markdown
![Testes Web](./evidencias/web-tests.png)

![Teste API Trello](./evidencias/api-trello.png)
```

---

# Melhorias futuras

Como evolução deste projeto, podem ser implementadas as seguintes melhorias:

- Relatórios de execução utilizando Mochawesome ou Allure Report;
- Pipeline de Integração Contínua com GitHub Actions;
- Execução parametrizada por ambiente;
- Ampliação da cobertura dos testes de API;
- Geração dinâmica de massa de dados para testes;
- Integração com ferramentas de qualidade e análise de código.

---
## Evidências da validação da API

Antes da implementação da automação, foi realizada uma validação manual do endpoint utilizando o Postman para confirmar o comportamento esperado da API.

Foram verificadas as seguintes condições:

- Status Code **200 OK**;
- Estrutura da resposta JSON;
- Retorno do campo `data.list.name`;
- Valor esperado: **Professional**.

### Validação manual da API (Postman)

![Validação da API no Postman](evidencias/postman-api.png)

### Execução da pipeline (GitHub Actions)

![Pipeline GitHub Actions](evidencias/pipeline-success.png)

# Nota de Transparência 

Durante o desenvolvimento deste desafio utilizei **Inteligência Artificial (ChatGPT)** como ferramenta de apoio para pesquisa, esclarecimento de dúvidas, revisão técnica, organização da documentação e discussão de alternativas de implementação.

Todas as decisões relacionadas à arquitetura da solução, implementação dos testes, validação dos resultados, adaptações no código e organização do projeto foram analisadas, compreendidas e validadas por mim. O uso da IA teve como objetivo apoiar o processo de desenvolvimento, sem substituir o entendimento técnico ou a responsabilidade sobre a solução entregue.

---

# Autor

**Jussara Gomes**

Profissional de Qualidade de Software (QA) com experiência em testes manuais e automatizados, focada na construção de soluções organizadas, reutilizáveis e sustentáveis.

Projeto desenvolvido como parte de um desafio técnico para demonstrar conhecimentos em automação de testes Web e API utilizando Cypress.