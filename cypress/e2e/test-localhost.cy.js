describe('See if page is up and running on Localhost', () => {
    it('sees if page is running on Localhost', () => {
      cy.visit('127.0.0.1:5500');
    });
  });

  describe('See if booking modal is working', () => {
    it('See if booking modal is working', () => {
      cy.visit('https://madeleinedahlqvist.github.io/hacker-escape-room/');
      cy.get('.rooms__button').first().click();
      cy.get('.modal__contentWrapper').should('be.visible');
      cy.get('.modal__date').click().type('2024-03-03');
    });
  });