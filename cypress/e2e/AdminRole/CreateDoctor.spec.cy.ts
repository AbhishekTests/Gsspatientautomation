import { faker } from '@faker-js/faker'
describe('Doctor Role', () => {
  it('Create New Doctor and Verify Successful Creation', function () {
    let usernamedec = faker.person.firstName();  // Generate random first name
    const initialLength = '[class="ant-table-tbody"]>tr';

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(2).click()
    cy.headingstyle('Doctor')
    cy.PageSizedropdown()
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
  it('Update Existing Doctor Information and Validate Changes', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number({ style: 'human' });
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(2).click()
    cy.headingstyle('Doctor')
    cy.get('[class="ant-col css-1drr2mu"]').eq(5).click()
    //update personal information

    // Handle gender dropdown
    cy.dropdown(5, 0);
    cy.get('#doctor_edit_profile_lastName').clear().type(lastnamedec)
    cy.get('#doctor_edit_profile_firstName').clear().type(firstnamedec)

    cy.get('#doctor_edit_profile_dateOfBirth').clear().type("01-06-2000")
    cy.get('[class="form-control "]').clear().type(91 + phoneno);

    //open address information header
    cy.expandCollapseSection('Address Information');

    cy.dropdown(9, 3) // Handle state dropdown
    cy.get('#doctor_edit_profile_address').clear().type(adress)
    cy.get('#doctor_edit_profile_city').clear().type(citynamedec)
    cy.get('#doctor_edit_profile_zip').clear().type(zipCode)

    cy.expandCollapseSection('Professional Information');
    cy.get('#doctor_edit_profile_emergencyNumber').clear().type('112');

    //   cy.Multiselectdropdown(17, 1,2) // Handle speciality dropdown
    cy.dropdown(17, 2) // Handle speciality dropdown
    cy.get('#doctor_edit_profile_amount').clear().type('1000');

    cy.contains('button', 'Update')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    //  cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]>span').click({ multiple: true })  
    cy.toastermsg(1, 'Updated Successfully');

  })
})