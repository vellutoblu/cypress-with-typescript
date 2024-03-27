
describe('my first test', () => {
  it('playing with typescript', () => {

    cy.visit('/todo')

    cy
      .get('[data-test="new-todo"]')
      .type('pay something{enter}')

    

      
    
    
    
  })
})