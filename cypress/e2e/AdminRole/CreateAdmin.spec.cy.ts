import { faker } from '@faker-js/faker'
describe('Admin Role Management Suite', () => {
  it('Create New Admin and Verify Successful Creation', function () {
  
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number();
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    const initialLength = '[class="ant-table-tbody"]>tr';
    
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.headingstyle('Admin')
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should("have.text", "Create Admin")
    cy.get('[class="ant-select-selector"]').click()
    cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
      .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      cy.CreateAdmin(firstnamedec,lastnamedec,phoneno,citynamedec,zipCode,adress)

      // cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      // cy.get('[class="ant-typography css-1drr2mu"]').should("have.text", "Create Admin")
      // cy.get('#firstName').type(firstnamedec)
      // cy.wait(2000)
      // // handle state Dropdown
      // cy.dropdown(7,8)
      // cy.get('#lastName').type(lastnamedec)
      // cy.get('#userName').type(firstnamedec + '01')
      // cy.get('#email').type(firstnamedec + "@yopmail.com")
      // cy.get('[class="form-control "]').type(phoneno)
      // cy.get('#city').type(citynamedec)
      // // handle gender dropdown...................................................................
      // cy.dropdown(5,1)
      // cy.get('#zip').type(zipCode);
      // cy.get('#address').type(adrees);
      // cy.get('#dateOfBirth').type("2000-09-01")
      // cy.get('[class="ant-form ant-form-vertical css-1drr2mu"]').click()

      // cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click().wait(3000)
      // cy.toastermsg(1, 'Admin Created Successfully')
      // cy.wait(5000)
      // cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text", firstnamedec + "@yopmail.com")

      cy.get('[class="ant-select-selector"]').click()
      cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1)
    })
  })
  it('Update Existing Admin Information and Validate Changes', function () {

    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number({ style: 'human' });
    let citynamedec = faker.location.city();
    let adrees = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.headingstyle('Admin')

    cy.get('[class="ant-col css-1drr2mu"]').eq(5).click()
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).find('span').should('have.text', 'Update')
    cy.get('#firstName').clear().type(firstnamedec)
    cy.get('#lastName').clear().type(lastnamedec)
    //cy.get('[class="form-control "]').clear().type(phoneno)
    cy.get('#city').clear().type(citynamedec)
    cy.get('#zip').clear().type(zipCode);
    cy.get('#address').clear().type(adrees);
    cy.get('#dateOfBirth').clear().clear().type("2001-09-01")
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
    cy.get('[class="ant-message-custom-content ant-message-success"]>span').eq(1).should('have.text', 'Updated Successfully')

  })
  it('Open and Validate Admin Profile Information', function () {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.headingstyle('Admin')
    cy.get('[class="ant-col css-1drr2mu"]').eq(4).click()
    cy.get('.mt-3 > p').should('have.text', 'Admin')

  })


})




