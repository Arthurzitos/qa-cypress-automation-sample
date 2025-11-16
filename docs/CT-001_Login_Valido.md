## 📄 CT-001 — Login com Credenciais Válidas
### 1. Identificação

- ID: CT-001

- Título: Login com credenciais válidas

- Módulo: Autenticação

- Status: Aprovado

- Autor: Arthur Guimarães

### 2. Objetivo

> Validar que o usuário com credenciais válidas consegue acessar a área autenticada da aplicação SauceDemo.

### 3. Pré-condições

1. A aplicação SauceDemo deve estar acessível.

2. O usuário `"standard_user"` deve estar ativo.

3. Navegador configurado e Cypress instalado.

### 4. Dados Utilizados

| Campo    | Valor           |
| -------- | --------------- |
| Username | `standard_user` |
| Password | `secret_sauce`  |

### 5. Passos para Execução

1. Acessar a URL: https://www.saucedemo.com/

2. Preencher o campo Username com `standard_user`

3. Preencher o campo Password com `secret_sauce`

4. Clicar no botão **Login**

5. Validar redirecionamento para `/inventory.html`

### 6. Resultado Esperado

> O login deve ser realizado com sucesso.

> O sistema deve redirecionar para https://www.saucedemo.com/inventory.html.

### 7. Evidências
> (Cypress salvará automaticamente em: `/cypress/screenshots/login.cy.js/`)
- Página de Login:

![](/docs/evidencias/CT-001/screenshots/CT001-01_pagina_login.png)

- Campos preenchidos:

![](/docs/evidencias/CT-001/screenshots/CT001-02_campos_preenchidos.png)

- Login realizado:

![](/docs/evidencias/CT-001/screenshots/CT001-03_login_realizado.png)


### Vídeo da Execução

> Gerado automaticamente em: `/cypress/videos/login.cy.js.mp4`