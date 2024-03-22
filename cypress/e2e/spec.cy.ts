
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .get('[data-id="1711078961972"] > .view > label')
      .realHover()

    
    
  })
})