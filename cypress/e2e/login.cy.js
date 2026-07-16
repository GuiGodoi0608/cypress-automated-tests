describe('Login', ()=>{
    it('Valid Login', ()=>{
        cy.viewport(1024, 768)
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.contains('input','Login').click()
        //cy.get('#login-button').click()
        cy.contains('Swag Labs').should('be.visible')
    })
    
})