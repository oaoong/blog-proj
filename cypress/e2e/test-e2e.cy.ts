/// <reference types="cypress" />

describe('cypress test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays "Hello" button', () => {
    cy.get('#target').first().should('have.text', 'Hello')
  })
})
