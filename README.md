## Cypress Automation Sample – QA Portfolio

Este repositório contém um teste simples de automação usando Cypress, criado para demonstrar conhecimento em:

- Estruturação de testes
- Escrita de cenários claros
- Validações objetivas
- Automação de fluxo real

## 🔧 Tecnologias

- JavaScript
- Cypress
- Node.js

## 📌 Cenário Automatizado

Fluxo: Login válido no site público de testes SauceDemo. <br/>
Objetivo: Validar que um usuário com credenciais corretas consegue acessar a área logada.

## Passos:

1. Acessar a página inicial
2. Inserir usuário válido
3. Inserir senha válida
4. Clicar em “Login”
5. Validar navegação para /inventory.html

## Resultado esperado:
- O sistema redireciona o usuário para a página de inventário após login com sucesso.

## ▶ Como executar
No terminal:
```
npm install
npx cypress open
```

Selecione o arquivo ```login.cy.js``` para rodar.

## 📂 Estrutura
```
cypress/
  e2e/
    login.cy.js
README.md
package.json
```
## 📞 Contato

Arthur Guimarães
LinkedIn: https://www.linkedin.com/in/oarthurguimaraes <br/>
Email: arthurgruimaraes@gmail.com
