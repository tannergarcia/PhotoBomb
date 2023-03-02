

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Choose Image').click()
    cy.get('input[type=file]').selectFile('c2.JPG',{force: true})
    cy.contains('Encode').click()
    cy.contains('Close').click()
    cy.contains('Decode').click()
    cy.contains('Close').click()
  })
})