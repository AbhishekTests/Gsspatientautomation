import { faker } from '@faker-js/faker'
describe('All Prescriptions test cases', function () {
    it('Give prescription', () => {
        cy.verifyUserRoleVisible('Doctor')
        cy.get('[class="item-name"]').eq(6).click()
        cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(0).click()
        cy.headingstyle('Appointments')
        cy.wait(3000)
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary ant-btn-sm"]').eq(0).click()
        cy.headingstyle('Prescription')
        cy.dropdown(10, 2)
        cy.dropdown(11, 2).wait(3000)
        cy.dropdown(14, 3)
        cy.get('#Patient_Prescription_advice').type('Take Medicine On Time')
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(3).click()
        cy.toastermsg(1, 'Created Successfully')
        // cy.get('.ant-form-item-control-input').eq(10).click().wait(5000)
        // cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
        // .find('[class="ant-select-item-option-content"]').eq(2).click({ force: true }).wait(3000)
        // // cy.get('[class="ant-space-item"]>input').type('Test02',{ force: true })
        // .find('[class="ant-btn-icon"]').eq(0).click({ force: true })
    })
    it('Prescription Creation with New Symptom Not Present in Dropdown', () => {
       // const testname = 'test';
        const symptomnames =['Foot pain ', 'Test','mantouxtest','sputumculture','stool culture','urine culture'];// 
        
      let symptoms= faker.helpers.arrayElement(symptomnames)

        cy.verifyUserRoleVisible('Doctor')
        cy.get('[class="item-name"]').eq(6).click()
        cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(0).click()
        cy.headingstyle('Appointments')
        cy.wait(3000)
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary ant-btn-sm"]').eq(0).click()
        cy.headingstyle('Prescription')
        cy.get('.ant-form-item-control-input').eq(10).click().wait(5000)
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
        cy.get('[class="ant-space-item"]>input').type(symptoms, { force: true })
        cy.get('[class="ant-btn-icon"]').eq(0).click({ force: true })
        cy.toastermsg(1, 'Created Successfully')
        cy.get('.ant-form-item-control-input').eq(10).type(symptoms)
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
           .find('[class="ant-select-item-option-content"]').eq(0).click({ force: true })
        cy.dropdown(11,1)
        cy.dropdown(14,1)
        cy.get('#Patient_Prescription_advice').type('Take Medicine On Time')
        cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(3).click()
        cy.toastermsg(1, 'Created Successfully')
       
        //    cy.get('.ant-select-item-option-content')
        //     .should('be.visible')  // Ensure dropdown options are loaded
        //     .then(($options) => {
        //         let found = false;  // Flag to track if the item was found
        //         $options.each((index, el) => {
        //             const itemText = Cypress.$(el).text().trim(); // Use jQuery to get trimmed text
        //             cy.log('Checking option:', itemText); // Debugging
                  

        //             cy.contains('.ant-select-item-option-content',symptoms ,{ timeout: 6000 }).then(($el)=>{
        //                 let count = $el.length
        //                 cy.get('.ant-select-item-option-content').should('have.length',count)
        //             })
        //         .should('be.visible').click({force :true})

                //     if (itemText === symptoms) {
                //         found = true; // Set flag if item is found
                //         cy.wrap(el).click();  // Click the matched item
                //         cy.get('.ant-select-selection-item-content').should('have.text', symptoms);
                //         return false;  // Break loop after finding match
                //     }else{
                //         cy.log('symptoms is not visible in dropdown')
                //     }
             //    })
           // })   ;
         //    cy.dropdown()
                // cy.get('.ant-select-item-option-content').each(($el,list) => {
                //           if($el.text()=== testname) {
                //             cy.log(' check it is visible')
                //             cy.wrap($el).click();  // Click the new item if found
                //             cy.get('.ant-select-selection-item-content').should('have.text',testname)
                //         }
                //     })
                // .find('[class="ant-select-item-option-content"]').eq(2).click({ force: true }).wait(3000)
                // .find('[class="ant-btn-icon"]').eq(0).click({ force: true })
            })
it('edit prescription',()=>{
    
    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(12).click()
    cy.headingstyle('Prescription')
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click()
    cy.dropdown(0,0)
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(3).click()
    cy.toastermsg(1, 'Updated Successfully')

})
})