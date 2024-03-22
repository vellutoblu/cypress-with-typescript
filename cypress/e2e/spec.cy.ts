
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .get('h1')
      .invoke('text')

    
    
  })
})