Cypress.Commands.add('login', (user =  Cypress.env('userLogin'), password = Cypress.env('userPassword')) => {
   
    cy.visit('/login')
    cy.get('#username').type(user)
    cy.get('#password').type(password), { log: false}
    cy.contains('button', 'Entrar ').click() 
})