describe('Desktop - Top Bar component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false })
    cy.viewport(1920, 1080)
  })
  it('should render the image in the navigation with box-shadow', () => {
    cy.get('[data-cy^="nav"] img').should('exist');
    cy.get('[data-cy^="nav"] img').should('have.css', 'box-shadow');
  });
  it('should render the navbar with 2 items', () => {
    cy.get('[data-cy^="nav"]').should('exist')

    cy.get('[data-cy^="nav"] li').should('have.length', 2)
    cy.get('[data-cy^="nav"] li').eq(0).should('contain.text', 'Home')
    cy.get('[data-cy^="nav"] li').eq(1).should('contain.text', 'Books')
  })
  it('should have a border bottom for either "Home" or "Books"', () => {
    cy.get('[data-cy^="nav"]').should('exist');
  
    cy.get('[data-cy^="nav"] li')
      .should('have.length', 2)
      .each(($li, index) => {
        if (index === 0) {
          cy.wrap($li).should('contain.text', 'Home').should('have.css', 'border-bottom');
        } else if (index === 1) {
          cy.wrap($li).should('contain.text', 'Books').should('have.css', 'border-bottom');
        }
      });
  });

  it('should switch focus to Books on click and update de URL', () => {
    cy.get('[data-cy^="nav"] li').eq(0).should('have.css', 'border-bottom')
    cy.get('[data-cy^="nav"] li').eq(1).should('not.have.a.property', 'border-bottom')

    cy.get('[data-cy^="nav"] li').eq(1).click();

    cy.get('[data-cy^="nav"] li').eq(0).should('not.have.a.property', 'border-bottom');
    cy.get('[data-cy^="nav"] li').eq(1).should('have.css', 'border-bottom');

    cy.url().should('include', '/books');
  })

  it('should switch focus to Home on click and update de URL', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();

    cy.get('[data-cy^="nav"] li').eq(0).should('not.have.a.property', 'border-bottom')
    cy.get('[data-cy^="nav"] li').eq(1).should('have.css', 'border-bottom')

    cy.get('[data-cy^="nav"] li').eq(0).click();

    cy.get('[data-cy^="nav"] li').eq(0).should('have.css', 'border-bottom')
    cy.get('[data-cy^="nav"] li').eq(1).should('not.have.a.property', 'border-bottom')

    cy.url().should('include', '/');
  })

})