describe('Login Inválido - SauceDemo', () => {
  it('Não deve logar com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.screenshot('01_pagina_login')

    cy.get('[data-test="username"]').type('random_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.screenshot('02_campos_preenchidos')

    cy.get('[data-test="login-button"]').click()

    cy.url().should('not.include', '/inventory.html')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface')

    cy.screenshot('03_erro_exibido')
  })
})
