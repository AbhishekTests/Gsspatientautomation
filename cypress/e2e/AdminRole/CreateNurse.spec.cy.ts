import { faker } from '@faker-js/faker'
describe('Nurse role', () => {
  it('Create New Nurse and Verify Successful Creation', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number();
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    let emergencyno = faker.phone.number({ style: 'national' });
    const initialLength = '[class="ant-table-tbody"]>tr'

    
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(3).click()
    cy.headingstyle('Nurse')
    cy.get('[class="nav-link"]').eq(1).click()
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should("have.text", "Create Nurse")
    cy.get('[class="ant-select-selector"]').click()
    cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
      .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length); // Store initial length
      let count = $el.length;

      cy.CreateNurse(firstnamedec,lastnamedec,phoneno,citynamedec,zipCode,adress,emergencyno)
      cy.wait(5000)
      //cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text",firstnamedec+"@yopmail.com")
      cy.get('[class="ant-select-selector"]').click()
      cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1);
    });
  });

  it('Should successfully update nurse details', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    //  let phoneno= faker.phone.number({style:'human'});
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(3).click()
    cy.headingstyle('Nurse')
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click()
    cy.get('#firstName').clear().type(firstnamedec)
    cy.get('#lastName').clear().type(lastnamedec)
    cy.dropdown(5,2) // Handle gender dropdown
    cy.get('#city').clear().type(citynamedec)
    cy.get('#zip').clear().type(zipCode);
    cy.get('#address').clear().type(adress);
    cy.get('#dateOfBirth').clear().type("2000-09-01")
    cy.get('#emergencyNumber').clear().type("112")

    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
    cy.toastermsg(1, 'Updated Successfully')
  })

  it('Nurse Profile', function () {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(3).click()
    cy.headingstyle('Nurse')
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(0).click()
    cy.get('.mt-3 > p').should('have.text','Nurse')

  })
})
