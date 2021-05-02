/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('addUser', (email, password) => {
  cy.visit('/register')

  cy.get('input[type="email"]').type(email)

  cy.get('input[type="password"]').type(password)

  cy.intercept('POST', '/identitytoolkit/v3/relyingparty/getAccountInfo?key=*').as('getAccountInfo')

  cy.get('button[type="submit"]').click()

  cy.wait('@getAccountInfo')

  cy.get('#root > .Toastify').should('have.text', 'Registrado com sucesso.');

  cy.get('button[aria-label="close"]').click();
  cy.get('button').contains('SAIR').click();

  cy.get('input[type="email"]').should('be.visible')

})