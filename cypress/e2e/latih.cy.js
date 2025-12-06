describe ('Scenario Login', () => {
    it('TC-001 - Login dengan valid username dan valid password', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('have.text','Swag Labs')
        cy.get('#user-name').should('exist')
        cy.get('#user-name').should('have.attr', 'placeholder', 'Username');
        cy.get('#user-name').type('standard_user').should('have.value','standard_user')
        cy.get('#password').should('exist')
        cy.get('#password').should('have.attr', 'placeholder', 'Password');
        cy.get('#password').type('secret_sauce').should('have.value','secret_sauce')
        cy.get('#login-button').should('have.value','Login')
        cy.get('#login-button').should('be.visible')
        cy.get('#login-button').click()
        cy.url().should('include','inventory')
        cy.get('.product_sort_container').select('Price (high to low)')

    })
    it('TC-002 - Login dengan valid username dan invalid password', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').should('exist')
        cy.get('#user-name').type('standard_user').should('have.value','standard_user')
        cy.get('#password').should('exist')
        cy.get('#password').type('salah_password').should('have.value','salah_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface')
    })
    it('TC-003 - Login dengan invalid username dan valid password', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').should('exist')
        cy.get('#user-name').type('salah_username').should('have.value','salah_username')
        cy.get('#password').should('exist')
        cy.get('#password').type('secret_sauce').should('have.value','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface')
    })
    it('TC-004 - Login dengan invalid username dan invalid password', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').should('exist')
        cy.get('#user-name').type('salah_username').should('have.value','salah_username')
        cy.get('#password').should('exist')
        cy.get('#password').type('salah_password').should('have.value','salah_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface')
    })
})
 