
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .contains('todos')
      .should('be.visible')

    
    
  })
})