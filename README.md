# Desafio QA - Automação Web e API com Cypress

## Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnico para avaliação de conhecimentos em **Qualidade de Software (QA)**, contemplando a automação de testes funcionais Web e testes de API utilizando **Cypress**.

Foram aplicadas boas práticas de organização, reutilização de código e manutenção, utilizando **Page Object Model (POM)**, **BDD com Cucumber** e separação entre testes Web e API.

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

# Versões utilizadas

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

# Arquitetura

O projeto foi estruturado utilizando o padrão **Page Object Model (POM)** para promover:

- Separação de responsabilidades;
- Reutilização de código;
- Facilidade de manutenção;
- Melhor legibilidade dos testes;
- Escalabilidade para inclusão de novos cenários.

Os testes Web foram desenvolvidos utilizando **BDD (Behavior Driven Development)** com **Cucumber**.

Os testes de API foram implementados utilizando o comando `cy.request()` do Cypress.

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

Antes de executar o projeto, é necessário possuir instalado:

- Node.js 24.18.0 ou superior
- npm 11.16.0 ou superior
- Git

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/JussaraGomes2020/Desafio_2026.git
```

Entre na pasta do projeto:

```bash
cd Desafio_2026
```

Instale todas as dependências:

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

## Executar todos os testes

```bash
npm run cy:run
```

ou

```bash
npx cypress run
```

---

## Executar apenas os testes Web (BDD)

```bash
npx cypress run --spec "cypress/e2e/**/*.feature"
```

---

## Executar apenas o teste da API

```bash
npx cypress run --spec "cypress/e2e/api/trello.cy.js"
```

---

# Funcionalidades automatizadas

## Testes Web

Foram automatizados os seguintes fluxos:

- Login
- Cadastro de Usuário
- Produtos
- Carrinho
- Checkout

Os cenários foram escritos utilizando **BDD (Gherkin)** e implementados através do **Cucumber**.

---

## Testes de API

Foi implementado um teste automatizado para consumo da API do Trello.

### Endpoint

```http
GET https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

### Validações realizadas

- Status Code 200
- Validação do campo:

```json
data.list.name
```

Valor esperado:

```text
Professional
```

Durante a execução também é exibido o valor retornado pela API através do comando:

```javascript
cy.log(`Nome da lista: ${response.body.data.list.name}`);
```

---

# Boas práticas adotadas

- ✔ Page Object Model (POM)
- ✔ BDD com Cucumber
- ✔ Organização por responsabilidade
- ✔ Separação entre testes Web e API
- ✔ Centralização de endpoints
- ✔ Reutilização de código
- ✔ Estrutura escalável
- ✔ Utilização de utilitários compartilhados
- ✔ Validação de respostas da API
- ✔ Código organizado para facilitar manutenção

---

# Evidências da execução

## Testes Web

Adicionar a captura de tela da execução dos cenários Web.

Exemplo:

```
evidencias/
└── web-tests.png
```

```markdown
![Testes Web](./evidencias/web-tests.png)
```

---

## Teste da API

Adicionar a captura de tela da execução do teste da API.

Exemplo:

```
evidencias/
└── api-trello.png
```

```markdown
![Teste API Trello](./evidencias/api-trello.png)
```

---

# Melhorias futuras

- Implementação de relatórios de execução (Mochawesome ou Allure Report);
- Integração contínua (CI) utilizando GitHub Actions;
- Execução parametrizada por ambiente;
- Ampliação da cobertura de testes de API;
- Geração automática de massa de dados para testes.

---

# Autor

**Jussara Gomes**

Projeto desenvolvido como parte de um desafio técnico para demonstração de conhecimentos em automação de testes Web e API utilizando Cypress.