describe('website is running', () => {
  it('website is running on github pages', () => {
    cy.visit('https://oskber.github.io/hacker-escape-room/');
  });
});

describe('find specific web element', () => {
  it('finds specific web element', () => {
    cy.visit('https://oskber.github.io/hacker-escape-room/challenges.html');
    cy.get('.title__filterBtn').click();
    cy.get('.filter__search__input').type('hacking');
  });
});

describe('navigate to different pages', () => {
  it('navigates to different pages', () => {
    cy.visit('https://oskber.github.io/hacker-escape-room/');
    cy.get('.onlineButton').first().click();
    cy.get('.rooms__button').first().click();
    cy.get('.modal__date').click().type('2024-02-16');
    cy.get('main').click('topLeft');
  });
});

describe('error handling', () => {
  it('shows "no matching challenges"', () => {
    cy.visit('https://oskber.github.io/hacker-escape-room/challenges.html');
    cy.get('.title__filterBtn').click();
    cy.get('.filter__selection__tags__button').click({ multiple: true });
    cy.get('#no-matching-challenges-msg').should(
      'contain',
      'No matching challenges'
    );
  });
});
