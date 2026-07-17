describe('Login', ()=>{
    it('Valid Login', ()=>{
        cy.iniciar()
        cy.submeterlogin('standard_user', 'secret_sauce')
        //cy.get('#login-button').click()
        cy.contains('Swag Labs').should('be.visible')
    })
    
})