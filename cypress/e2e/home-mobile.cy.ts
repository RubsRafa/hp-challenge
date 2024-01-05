describe('Desktop - Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false })
    cy.viewport(1920, 1080)
  })
  it('should render Home page', () => {
    cy.get('[data-cy^="home_page"]').should('exist')
  })
  it('should render images to change house', () => {
    cy.get('[data-cy^="home_page"] li').then(($images) => {
      for(let i = 0; i < $images.length; i++) {
        cy.wrap($images[i]).invoke('css', 'border-radius').should('equal', '9.6px')
        cy.wrap($images[i]).invoke('css', 'padding-block').should('equal', '6.4px')
        cy.wrap($images[i]).invoke('css', 'padding-inline').should('equal', '28.8px')
      }
    })
  })
  it('should change background color', () => {
    cy.get('[data-cy^="Gryffindor"]').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(71, 15, 7)')

    cy.get('[data-cy^="Slytherin"]').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(14, 43, 43)')

    cy.get('[data-cy^="Ravenclaw"]').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(1, 13, 47)')

    cy.get('[data-cy^="Hufflepuff"]').click();
    cy.get('main').should('have.css', 'background-color', 'rgb(55, 46, 41)')
  })
  it('displays Sorting Hat phrases after sorting', () => {
    cy.get('[data-cy^="balloon_phrase"]').should('not.be.visible')
    cy.get('[data-cy^="sorting_hat"]').should('not.be.visible')

    cy.get('[data-cy^="sort_button"]').click()

    cy.get('[data-cy^="balloon_phrase"]').should('be.visible')
    cy.get('[data-cy^="sorting_hat"]').should('be.visible')
  })

})