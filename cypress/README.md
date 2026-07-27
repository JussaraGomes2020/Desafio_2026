# 🚀 Desafio Cypress

Framework de automação de testes Web desenvolvido com **Cypress**, **Cucumber (BDD)** e **Page Object Model (POM)**.

## 📋 Objetivo

Este projeto foi desenvolvido para automatizar cenários da aplicação **Automation Exercise**, utilizando boas práticas de engenharia de software, organização por funcionalidades e separação de responsabilidades.

---

# 🛠 Tecnologias

- Cypress 15
- Cucumber (BDD)
- JavaScript
- Page Object Model (POM)
- ESBuild

---

# 📁 Estrutura do Projeto

```text
cypress
│
├── e2e
│   ├── cadastrar_usuario
│   ├── carrinho
│   ├── checkout
│   ├── login
│   ├── produtos
│   │
│   ├── pages
│   └── utils
│
├── fixtures
│   ├── cadastro_usuario
│   ├── login
│   ├── produto
│   ├── usuarios
│   └── data
│
├── support
│
├── screenshots
├── videos
└── downloads
```

---

# 🏗 Arquitetura

O projeto segue a arquitetura **Page Object Model (POM)**.

Cada funcionalidade possui:

- Feature
- Step Definition
- Page Object
- Massa de Dados

A responsabilidade de cada camada é:

| Camada | Responsabilidade |
|---------|------------------|
| Feature | Descrever o comportamento esperado |
| Step | Orquestrar o cenário |
| Page | Centralizar as interações com a interface |
| Fixture | Armazenar massas de teste |
| Utils | Funções auxiliares reutilizáveis |

---

# 📦 Instalação

Clone o projeto

```bash
git clone <url-do-repositorio>
```

Acesse a pasta

```bash
cd desafio_cypress
```

Instale as dependências

```bash
npm install
```

---

# ▶️ Executando os testes

Abrir o Cypress

```bash
npm run cy:open
```

Executar em modo Headless

```bash
npm run cy:run
```

---

# 📄 Executando uma Feature

Exemplo:

```bash
npx cypress run --spec "cypress/e2e/login/login.feature"
```

---

# 📚 Convenções adotadas

## Organização

Cada funcionalidade possui sua própria pasta.

Exemplo:

```text
login
│
├── login.feature
└── login.js
```

---

## Nomenclatura

### Features

```
login.feature
```

### Steps

```
login.js
```

O arquivo de Step possui o mesmo nome da Feature para manter compatibilidade com o `@badeball/cypress-cucumber-preprocessor`.

---

## Pages

```
LoginPage.js
ProdutosPage.js
CarrinhoPage.js
```

---

## Fixtures

As massas são separadas por funcionalidade.

Exemplo:

```text
fixtures

login/
cadastro_usuario/
produto/
usuarios/
```

---

# 🧩 Boas práticas adotadas

- Page Object Model
- Reutilização de código
- Separação de responsabilidades
- Uso de BasePage
- Utilização de baseUrl
- Organização por funcionalidade
- Dados desacoplados da automação
- Código de fácil manutenção

---

# 🔄 Fluxo da automação

```text
Feature
     │
     ▼
Step
     │
     ▼
Page
     │
     ▼
Cypress
```

---

# 📈 Próximas melhorias

- [ ] Integração com Allure Report
- [ ] Mochawesome Report
- [ ] Testes de API
- [ ] Integração Contínua (GitHub Actions)
- [ ] Execução por Tags
- [ ] Validação de JSON Schema
- [ ] Geração dinâmica de dados com Faker
- [ ] Ambiente DEV/HML/PRD

---

# 👩‍💻 Autora

**Jussara Gomes**

QA Engineer | Automação de Testes | Cypress | API Testing | BDD | JavaScript