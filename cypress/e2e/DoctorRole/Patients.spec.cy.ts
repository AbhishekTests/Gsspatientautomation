import { faker } from "@faker-js/faker"
describe('Patients workflow tests', function () {
    it('Create New Patients and Verify Successful Creation', () => {
        let firstnamedec = faker.person.firstName();
        let lastnamedec = faker.person.lastName();
        let phoneno = faker.phone.number();
        let citynamedec = faker.location.city();
        let adrees = faker.location.streetAddress(true);
        const initialLength = '[class="ant-table-tbody"]>tr';
        
        cy.get('[class="item-name"]').eq(5).click() 
        cy.verifyUserRoleVisible('Doctor')
        cy.headingstyle('Patients')
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should('have.text', 'Add New')
        cy.SelectPageSizedropdown()
        cy.wait(5000)
        cy.get(initialLength).then(($el) => {
            console.log($el.length);
            let count = $el.length;

            cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
            cy.get('[class="ant-typography css-1drr2mu"]').eq(0).should('have.text', 'Appointment')
            cy.get('[class="form-control "]').type(phoneno)
            cy.wait(4000)
            // cy.get('[class="ant-message-custom-content ant-message-info"]').find('span').should('have.text', 'No previous appointment found for this patient number')
            // cy.wait(4000)
            cy.dropdown(12, 0) // Handle country dropdown
            cy.get('[class="ant-form-item-control-input-content"]').eq(10).type(firstnamedec)
            cy.wait(3000)
            cy.dropdown(13, 0) // Handle State dropdown
            cy.get('#dateOfBirth').clear().type("1991-09-01")
            cy.dropdown(24, 1)  // handle gender dropdown
            cy.get('#reasonForAppoinment').type("Stone Pain")
            cy.dropdown(26, 1)// Handle Language dropdown
            cy.get('#lastName').type(lastnamedec)
            cy.dropdown(18, 1) // handle Speciality field
            cy.get('#address').type(adrees);
            cy.dropdown(19, 0)  //handle referd to dropdown
            cy.get('#city').type(citynamedec)
            cy.datecal(20, 'Today') // handle appointment date 
            cy.get('#email').type(firstnamedec + "01@yopmail.com")
            cy.datecal(21, 'Now') //  handle Appointment time
            cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(2).should('have.text', 'Submit').click().wait(2000)
            cy.toastermsg(1, 'Created Successfully')
            cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(2).should('have.text', firstnamedec)
            cy.get(initialLength).should('have.length', count + 1)

        })

    })
    it('Should successfully update Patient details', function () {
        let firstnamedec = faker.person.firstName();
        let lastnamedec = faker.person.lastName();
        //  let phoneno= faker.phone.number({style:'human'});
        let citynamedec = faker.location.city();
        let adress = faker.location.streetAddress(true);
        let zipCode = faker.location.zipCode('######');
        cy.get('[class="item-name"]').eq(5).click() 
        cy.verifyUserRoleVisible('Doctor')
        cy.headingstyle('Patients')
        cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click().wait(3000)
        cy.get('[class="ant-typography css-1khm1u7"]').should('have.text', 'Update Patient  ')
        cy.get('#firstName').clear().type(firstnamedec)
        cy.get('#lastName').clear().type(lastnamedec)
        cy.dropdown(3, 0) // handle gender dropdown
        cy.get('#city').clear().type(citynamedec)
        cy.get('#address').clear().type(adress);
       // cy.get('#email').clear().type(firstnamedec + "01@yopmail.com")
        cy.dropdown(2, 0)  //Handle BloodGroup Dropdown
        cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
        cy.toastermsg(1, 'Updated Successfully')
      })
      it('Patient details', function () {
        cy.get('[class="item-name"]').eq(5).click() 
        cy.verifyUserRoleVisible('Doctor')
        cy.headingstyle('Patients')
        cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(0).click().wait(3000)
        cy.get('[class="ant-typography css-1khm1u7"]').should('have.text', ' Patient Details ')
    
      })
})