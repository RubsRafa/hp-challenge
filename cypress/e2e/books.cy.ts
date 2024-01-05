describe('Desktop - Books Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false })
    cy.viewport(1920, 1080)
  })

  it('should render skeletons before rendering books', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();

    cy.get('[data-cy="book_card_skeleton"]').should('have.length', 10)
  })

  it('should render books with images and read button', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();

    cy.get('[data-cy="book_card"]').should('have.length.greaterThan', 0)
    cy.get('[data-cy="book_card"] img').each(($image) => {
      cy.wrap($image).should('be.visible')
    })
  
    cy.get('[data-cy="book_card"] button').each(($button) => {
      cy.wrap($button).should('be.visible').and('have.text', 'Read')
    })
  })

  it('should show book title on hover over the book image', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();

    cy.get('[data-cy="book_card"] img').first().trigger('mouseover')
    cy.get('[data-cy="book_card"] h3').first().should('be.visible')
  })

  it('should redirect to the book details page when clicking on a book', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();
    cy.get('[data-cy="book_card"] button').first().click()

    cy.url().should('include', '/books/')
  })

  it('should display skeleton before book content', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();
    cy.get('[data-cy="book_card"] button').first().click()

    cy.get('[data-cy="book_skeleton"]').should('exist')
  })

  it('should render book details including title, author, summary, release_date, and dedication', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();
    cy.get('[data-cy="book_card"] button').first().click()

    cy.get('[data-cy="book_info"]').should('exist')

    cy.get('[data-cy="book_title"]').should('be.visible')
    cy.get('[data-cy="book_author"]').should('be.visible')
    cy.get('[data-cy="book_summary"]').should('be.visible')
    cy.get('[data-cy="book_release_date"]').should('be.visible')
    cy.get('[data-cy="book_dedication"]').should('be.visible')
  })

  it('should render chapters with hover effect', () => {
    cy.get('[data-cy^="nav"] li').eq(1).click();
    cy.get('[data-cy="book_card"] button').first().click()

    cy.get('[data-cy="book_chapters"]').should('exist')

    cy.get('[data-cy="chapter"]').should('have.length.greaterThan', 0)

    cy.get('[data-cy="chapter"]').each(($chapter) => {
    cy.wrap($chapter).trigger('mouseover').should('have.css', 'background-color').and('match', /rgb\(.*\)/)
  })
  })

})