import { faker } from '@faker-js/faker'
describe('Profile workflow tests', function () {
    it('Open profile', () => {
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(2).click()
        cy.headingstyle('Profile')
        cy.ProfileName('Doctor')
    })
    it('Doctor update our Informations', () => {
        let zipCode = faker.location.zipCode('######');
        let phoneno = faker.phone.number({ style: 'national' });
        let citynamedec = faker.location.city();
        let adress = faker.location.streetAddress(true);
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(3).click().wait(3000)
        cy.headingstyle('Edit Doctor')
        // personal information
        cy.get('[class="form-control "]').eq(0).clear().type(91 + phoneno)
        cy.get('#doctor_edit_profile_firstName').type('1')
        cy.wait(3000);
        //open address information header
        cy.expandCollapseSection('Address Information');
        cy.get('#doctor_edit_profile_address').clear().type(adress)
        cy.get('#doctor_edit_profile_city').clear().type(citynamedec)
        cy.get('#doctor_edit_profile_zip').clear().type(zipCode)
        cy.expandCollapseSection('Professional Information');
        cy.get('#doctor_edit_profile_emergencyNumber').clear().type('112');
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
        cy.toastermsg(1, 'Updated Successfully');




    })

    it('Doctor Set our Availability', () => {
        cy.get('[class="item-name"]').eq(1).click()
        cy.get('[class="item-name"]').eq(4).click()
        cy.headingstyle('Availability')
        cy.get('[class="jsx-4d4a1c76b34ae022 btn btn-primary"]').click()
        cy.get('[class="ant-typography css-1drr2mu"]').should('have.text', 'Doctor Availability')
        cy.dropdown(0, 1)
        cy.get('[class="anticon anticon-delete"]').last().click()
        cy.toastermsg(1, 'Delete successfully')
        cy.wait(3000)
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').first().click()
        cy.get('[class="ant-select-selection-search-input"]').last().type('Saturday{enter}');
        cy.selectStartTime(1);

        cy.selectEndTime(4);
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').last().click()

        cy.toastermsg(1, 'Updated Successfully')

    })
})






