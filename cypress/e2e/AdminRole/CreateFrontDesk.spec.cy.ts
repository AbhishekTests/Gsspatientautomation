import { faker } from '@faker-js/faker'
describe('Frontdesk role', () => {
  it('Create New FrontDesk and Verify Successful Creation', function () {

    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number();
    let citynamedec = faker.location.city();
    let adrees = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    let emergencyno = faker.phone.number({ style: 'national' });
    const initialLength = '[class="ant-table-tbody"]>tr';
    
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(4).click()
    cy.headingstyle('FrontDesk')
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should("have.text", "Create FrontDesk")
    cy.SelectPageSizedropdown()
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      // cy.log($el.length);
      let count = $el.length;
      cy.CreateFrontdesk(firstnamedec,lastnamedec,phoneno,citynamedec,zipCode,adrees,emergencyno) //Fill all mendentory field
      cy.wait(5000)
      cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text", firstnamedec + "@yopmail.com")
      cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1);
    })
  })
  it('Update Existing FrontDesk Information and Validate Changes', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    //  let phoneno= faker.phone.number({style:'human'});
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(4).click()
    cy.headingstyle('FrontDesk')
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click()
    cy.get('#firstName').clear().type(firstnamedec)
    cy.get('#lastName').clear().type(lastnamedec)
    cy.dropdown(5, 2) // Handle gender dropdown
    cy.get('#city').clear().type(citynamedec)
    cy.get('#zip').clear().type(zipCode);
    cy.get('#address').clear().type(adress);
    cy.get('#dateOfBirth').clear().type("2000-09-01")
    cy.get('#emergencyNumber').clear().type("112")
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
    cy.toastermsg(1,'Updated Successfully')
                    
  })
  it('FrontDesk Profile', function () {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(4).click()
    cy.headingstyle('FrontDesk')  
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(0).click()
    cy.ProfileName('FrontDesk')
  })  
})