const { recurse } = require("cypress-recurse")



class HomePage {
   
  get clearCookiesLink() {
    return cy.contains('a', 'clearCookies')
  }

  findClearCookiesLink() {
    recurse(() => {
      return this.clearCookiesLink
    },
    ($link) => {
      cy.wrap($link).should('be.visible')
    }, {
      post() {
        // Here you can't use getter defined up there this.clearCookiesLink 
      }
    })
  }

}

export default new HomePage