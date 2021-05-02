/* eslint-disable no-undef */
import faker from 'faker'

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it('Should register a new user', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.addUser(email, password).then(() => {
      cy.get('input[type="email"]').type(email)
      cy.get('input[type="email"').should('contain.value', email)

      cy.get('input[type="password"]').type(password)
      cy.get('input[type="password"]').should('contain.value', password)

      cy.intercept('POST', '/identitytoolkit/v3/relyingparty/getAccountInfo?key=*').as('getAccountInfo')

      cy.get('button[type="submit"]').click()

      cy.wait('@getAccountInfo')

      cy.get('#root > .Toastify').should('have.text', 'Login realizado com sucesso.');

      cy.get('img[usemap="#gmimap0"]').should('be.visible')

      cy.get('button[aria-label="close"]').click();
      cy.get('button').contains('SAIR').click();

      cy.get('input[type="email"]').should('be.visible')
    })


  })

})
