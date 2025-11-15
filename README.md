## 🧪 Cypress Automation — Portfolio QA

Este repositório faz parte do meu portfólio técnico de Qualidade de Software. Ele demonstra minha capacidade de estruturar, automatizar e documentar testes E2E utilizando Cypress.

O objetivo é mostrar conhecimento real em:

- Escrita de cenários de teste
- Automação de testes end-to-end
- Documentação técnica
- Boas práticas de QA
- Investigação e validação de fluxo completo

## 🚀 Cenário Automatizado
- CT-001 — Login com credenciais válidas

Fluxo: Login no site público SauceDemo

Objetivo: Garantir que um usuário válido consegue acessar a área logada

Status: Aprovado

Documentação: `/docs/CT-001_Login_Valido.md`

## 📁 Evidências (geradas automaticamente pelo Cypress)

- Screenshots: `cypress/screenshots/`

- Vídeos: `cypress/videos/`

### Validações Feitas:

- ✔ Redirecionamento para `/inventory.html` após autenticação
- ✔ Preenchimento de campos
- ✔ Execução reproduzível

## 🧩 Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js
- VSCode

## ▶ Como executar o projeto

### Instalar dependências:

`npm install`

### Abrir o Cypress:

`npx cypress open`

### Para rodar o teste:

`login.cy.js`

## ▶ Executar em modo headless (gera evidências automaticamente):
`npx cypress run`

## 📂 Estrutura do Projeto
```
  cypress/
    e2e/
      login.cy.js
    screenshots/
    videos/
  docs/
    CT-001_Login_Valido.md
    evidencias/
      CT-001/
  README.md
  package.json
```

## 📞 Contato

### Arthur Guimarães
- LinkedIn: linkedin.com/in/oarthurguimaraes
- E-mail: arthurgruimaraes@gmail.com