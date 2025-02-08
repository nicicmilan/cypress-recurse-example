const { recurse } = require("cypress-recurse")



class HomePage {
   
  get clearCookiesLink() {
    return cy.contains('a', 'clearCookies')
  }

    // NOTE: THIS ELEMENT IS JUST EXAMPLE, NOT REAL ELEMENT FROM ANY WEBSITE
  get paginationBtn() {
    return cy.get('example')
  }

  findClearCookiesLink() {
    recurse(() => {
      return this.clearCookiesLink
    },
    ($link) => {
      cy.wrap($link).should('be.visible')
    }, {
      post() {
        this.paginationBtn.click() // you cannot call this getter here
        // Here you can't use getter defined up there this.clearCookiesLink 
      }
    })
  }

}

export default new HomePage