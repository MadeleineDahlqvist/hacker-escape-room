describe('See if page is up and running on Localhost', () => {
    it('sees if page is running on Localhost', () => {
      cy.visit('127.0.0.1:5500');
    })
  })