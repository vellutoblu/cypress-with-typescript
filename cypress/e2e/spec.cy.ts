
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .get(':nth-child(1) > .view > label')
      .realHover()
    

      
    
    
    
  })
})