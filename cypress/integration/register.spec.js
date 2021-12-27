describe('Register', () => {
    it('User should become a delivery person', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliveryman = {
            name: 'Michael Brendo',
            cpf: '00000012345',
            email: 'michael@email.com',
            whatsapp: '11999999999',
            address: {
                zip_code: '01025-010',
                street: 'Rua Augusto Severo',
                number: '123',
                complement: 'Apt: 70',
                district: 'Centro',
                city_uf: 'são Paulo/SP'
            }
        }

        cy.get('input[name="name"]').type(deliveryman.name)
        cy.get('input[name="cpf"]').type(deliveryman.cpf)
        cy.get('input[name="email"]').type(deliveryman.email)
        cy.get('input[name="whatsapp"]').type(deliveryman.whatsapp)

        cy.get('input[name="postalcode"]').type(deliveryman.address.zip_code)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliveryman.address.number)
        cy.get('input[name="address-details"]').type(deliveryman.address.complement)
        

    })
})