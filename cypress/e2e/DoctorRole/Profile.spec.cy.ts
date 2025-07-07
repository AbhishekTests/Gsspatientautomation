import { faker } from '@faker-js/faker'
describe('Profile workflow tests', function () {
    it('Open profile', () => {
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(2).click()
        cy.headingstyle('Profile')
        cy.ProfileName('Doctor')
    })
    it('Doctor update our Personal Information', () => {
        let zipCode = faker.location.zipCode('######');
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(3).click()
        cy.headingstyle('Edit Doctor')
        cy.dropdown(16, 3)
        cy.get('#doctor_edit_profile_zip').clear().type(zipCode)
         cy.get('#doctor_edit_profile_firstName').type('1')
        cy.get('[class="ant-col css-1drr2mu"]>button').click()
    })
    
    it('Doctor Set our Availability', () => {
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(4).click()
        cy.headingstyle('Availability')
        cy.get('[class="btn btn-primary"]').eq(1).click()
        cy.get('[class="ant-typography css-1drr2mu"]').should('have.text', 'Doctor Availability')
        cy.dropdown(0, 1)
        cy.get('[class="ant-btn css-1drr2mu ant-btn-default ant-btn-dangerous"]').last().click()
        cy.toastermsg(1, 'Delete successfully')
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(0).click()
        cy.dropdown(24, 1)
        cy.get('[class="ant-picker-input"]').eq(22).click()
        cy.get('[class="ant-picker-time-panel-cell-inner"]').eq(4).click()
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary ant-btn-sm"]').click()       
        cy.get('[class="ant-picker-time-panel-cell-inner"]').eq(6).click()
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary ant-btn-sm"]').click()
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
        cy.toastermsg(1, 'Updated Successfully')
      
    })
})






