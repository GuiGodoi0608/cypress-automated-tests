describe('Login', ()=>{
    it('Valid Login', ()=>{
        cy.viewport('iphone-8')
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.contains('input','Login').click()
        //cy.get('#login-button').click()
    })
    
})