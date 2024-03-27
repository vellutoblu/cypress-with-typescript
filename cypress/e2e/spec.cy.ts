
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .get(':nth-child(1) > .view > label')
      .realHover()
      .find('.destroy todo-button')
      .should('be.visible')

    
    
  })
})