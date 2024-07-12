const { log } = require("wd/lib/commands")

describe('Login', () => {
    it('should login', () => {
       cy.login()
       cy.contains('button', 'Ignorar avisos').click()
       cy.get('.visible-md > uni-user-menu.ng-isolate-scope > .dropdown > .profile-dropdown-toggle > .ng-scope.ng-isolate-scope > .thumbnail-wrapper > .bg-master-light').click()
       cy.contains('h5', 'DIONIS').should('be.visible')
    })
})


