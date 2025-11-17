## 📄 CT-001 — Login com Credenciais Inválidas
### 1. Identificação

- ID: CT-002

- Título: Login com credenciais inválidas

- Módulo: Autenticação

- Status: Aprovado

- Autor: Arthur Guimarães

### 2. Objetivo

> Validar que o sistema não permite autenticação quando o usuário informa credenciais inválidas e exibe a mensagem de erro correspondente.

### 3. Pré-condições

1. A aplicação SauceDemo deve estar acessível.

2. Navegador configurado e Cypress instalado.

3. Usuário informado no teste **não** deve existir no sistema.

### 4. Dados Utilizados

| Campo    | Valor           |
| -------- | --------------- |
| Username | `random_user` |
| Password | `secret_sauce`  |

### 5. Passos para Execução

1. Acessar a URL: https://www.saucedemo.com/

2. Preencher o campo Username com `random_user`

3. Preencher o campo Password com `secret_sauce`

4. Clicar no botão **Login**

5. Validar que a autenticação não foi realizada

6. Validar a exibição da mensagem de erro no elemento `[data-test="error"]`

### 6. Resultado Esperado

> O login não deve ser realizado. <br/>
> O sistema deve permanecer na página de login. <br/>
> O sistema deve exibir a mensagem de erro contendo o texto "Epic sadface".



### 7. Evidências
> (Cypress salvará automaticamente em: `/cypress/screenshots/CT-002_login_invalido.cy.js`)
- Página de Login:

![](/docs/evidencias/CT-002/screenshots/01_pagina_login.png)

- Campos preenchidos:

![](/docs/evidencias/CT-002/screenshots/02_campos_preenchidos.png)

- Login **não** realizado:

![](/docs/evidencias/CT-002/screenshots/03_erro_exibido.png)


### Vídeo da Execução

> Gerado automaticamente em: `/cypress/videos/CT-002_login_invalido.cy.js.mp4`