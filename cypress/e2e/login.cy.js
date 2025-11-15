describe('Login - SauceDemo', () => {
  it('Deve logar com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.screenshot('01_pagina_login')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.screenshot('02_campos_preenchidos')

    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.screenshot('03_login_realizado')
  })
})
