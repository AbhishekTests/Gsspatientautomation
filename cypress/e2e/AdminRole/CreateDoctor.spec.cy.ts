import { faker } from '@faker-js/faker'
describe('Doctor Role', () => {  
  it('Create New Doctor and Verify Successful Creation', function () {
      let usernamedec = faker.person.firstName();  // Generate random first name
      const initialLength = '[class="ant-table-tbody"]>tr';

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(2).click()
    cy.headingstyle('Doctor')
    cy.SelectPageSizedropdown()
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length); // Store initial length
      let count = $el.length;
 // Step 2: Perform the action to add a new doctor
cy.CreateDoctor(usernamedec)
      
      cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1)
    });
  });
  it.skip('Update Existing Doctor Information and Validate Changes', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
//  let phoneno= faker.phone.number({style:'human'});
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(2).click()
    cy.headingstyle('Doctor')
    cy.get('[class="ant-col css-1drr2mu"]').eq(5).click()
    cy.get('#firstName').clear().type(firstnamedec)
    cy.get('#lastName').clear().type(lastnamedec)
    //   cy.get('[class="form-control "]').eq(0).clear().type(phoneno)

    // Handle gender dropdown
    cy.get('.ant-form-item-control-input-content').eq(5).click()
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
    .find('[class="ant-select-item-option-content"]').should('be.visible').eq(1).click({ force: true })
    cy.get('#city').clear().type(citynamedec)
    cy.get('#zip').clear().type(zipCode);
    cy.get('#address').clear().type(adress);
    cy.get('#dateOfBirth').clear().type("2000-09-01")
    cy.get('#emergencyNumber').clear().type("112")
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
    cy.get('[class="ant-message-custom-content ant-message-success"]').find('span').eq(1).should('have.text', 'Updated Successfully')
 
  })
})