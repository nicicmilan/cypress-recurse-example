import homePage from '../pages/homePage'

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  it('passes', () => {
    homePage.findClearCookiesLink()
  })
  
})