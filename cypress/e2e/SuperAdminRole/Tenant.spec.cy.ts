import { faker } from '@faker-js/faker'
describe('tenant test cases', () => {
 
    it.skip('Create new tenant', function () {
    let tenantname = faker.company.buzzVerb()
    let cityname = faker.location.city()
    let addressname = faker.location.streetAddress()
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    // let phoneno = faker.phone.number();
    // let citynamedec = faker.location.city();
    // let adrees = faker.location.streetAddress(true);

    let zipCode = faker.location.zipCode('######');

    cy.get('.ant-tag').wait(3000).should("be.visible")
    cy.get('[class="item-name"]').eq(2).click()
    cy.wait(2000)
    cy.get('[class="mb-4 create-tenant-heading"]').eq(0).should('have.text', 'Tenant Information: ').rightclick(15, 40)

    // cy.dropdown(2,2)
    cy.get('#Tenant_and_TenantAdmin_Register_hospitalName').type(tenantname + ' hospital')
    cy.wait(3000)
    cy.dropdown(2, 2)
    cy.get('#Tenant_and_TenantAdmin_Register_city').type(cityname)
    cy.get('#Tenant_and_TenantAdmin_Register_zip').type(zipCode)
    cy.get('#Tenant_and_TenantAdmin_Register_emergencyNumber').type('108')
    cy.dropdown(7, 0)
    cy.get('.ant-form-item-control-input').eq(5).type('9797869875')
    cy.dropdown(8, 2)
    cy.get('#Tenant_and_TenantAdmin_Register_greetingArea').type('Welcome to our tenant')
    cy.get('[class="next action-button float-end mt-2 btn btn-primary"]').should('have.text', 'Next').click({ force: true })
    cy.wait(6000)
    // Admin Information

    cy.get('h3').contains('Create Tenant').should('be.visible')
    cy.get('[class="mb-4 create-tenant-heading"]').eq(1).should('have.text', 'Admin Information:')
    cy.get('#Tenant_and_TenantAdmin_Register_adminFirstName').type(firstnamedec)
    cy.get('#Tenant_and_TenantAdmin_Register_adminLastName').type(lastnamedec)
    cy.get('#Tenant_and_TenantAdmin_Register_adminUserName').type(firstnamedec + '1')
    cy.get('#Tenant_and_TenantAdmin_Register_adminEmail').type(firstnamedec + '@yopmail.com')
    cy.get('.ant-form-item-control-input').eq(12).type('4545356534')
    cy.dropdown(14, 2)
    cy.get('#Tenant_and_TenantAdmin_Register_adminCity').type(cityname)
    cy.get('#Tenant_and_TenantAdmin_Register_adminDOB').type('2000-02-01')
    cy.get('#Tenant_and_TenantAdmin_Register_adminAddress').type(addressname)
    cy.dropdown(18, 0)
    cy.get('#Tenant_and_TenantAdmin_Register_adminZip').type(zipCode)

    // const btn=cy.get('[class="ant-form-item-control-input-content"] button[class="btn btn-primary next action-button float-end btn btn-primary"]');
    // console.log('btn length is',btn.length)
    // btn.contains('Submit').should('have.text','Submit')
    // cy.get('[class="btn btn-primary next action-button float-end btn btn-primary"]').click()
    //   cy.request('https://stagcloudhealthapi.grootsoftwares.com/api/Tenant').then((response) => {
    //     expect(response.status).to.eq(200); // Ensure API returns a successful response
    //     if (response.body && response.body.errors) {
    //         console.log(response.body.errors);
    //     } else {
    //         console.warn('Response body is missing "errors":', response);
    //     }
    // })
    cy.get('button[type="submit"]')
      .then(($btn) => {
        console.log('btn length is', $btn.length);

        // Click the button that contains 'Submit'
        cy.wrap($btn).should('be.visible')
          .should('not.be.disabled')
          .should('have.text', 'Submit')
          .click()
      })
    cy.intercept('GET', '/api/Tenant', (req) => {
      req.reply((res) => {
        // Validate status code
        expect(res.statusCode).to.eq(200);
        // Add any other validations or modifications here if needed
      });
    }).as('getTenantDetails');
    // cy.intercept('GET', 'api/Tenant').as('downloadRequest');
    // cy.wait(2000);
    // cy.get('.anticon.anticon-download').eq(0).click();
    // cy.wait('@downloadRequest').then((interception) => {
    //   if (interception && interception.response) {
    //     console.log('Request URL:', interception.request.url);
    //     console.log('Response Code:', interception.response.statusCode);
    //     expect(interception.response.statusCode).to.eq(200);
    //     cy.log('Download API Response:', interception.response.statusCode);
    //     console.log('Download API Response:', interception.response.statusCode);
    //   }
    // })
    //     cy.wait(10000)
    // cy.get('h3').should('have.text','Tenants')

    // cy.wait(4000)
    //cy.toastermsg(1,'Tenant Created Successfully')    
    // cy.get('#Tenant_and_TenantAdmin_Register_stateId').click()
    // cy.get('[class="ant-select-item-option-content"]').eq(2).click()

  })
  it('Update tenant details', () => {
    let cityname = faker.location.city()
    let zipCode = faker.location.zipCode('######');
    cy.get('[class="item-name"]').eq(1).click()
    cy.headingstyle('Tenants')
    cy.wait(10000)
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click()
    cy.get('#city').clear().type(cityname)
    cy.get('#zip').clear().type(zipCode)
    cy.wait(3000)
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(1).click()
    cy.toastermsg(1, 'Update Successfully')

  })
  it('Create new admin in new tenant', () => {
    let firstnamedec = faker.person.firstName()
    let lastnamedec = faker.person.lastName()
    let citynamedec = faker.location.city();
    let adrees = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    let phoneno = faker.phone.number();
    const initialLength = '[class="ant-table-tbody"]>tr';

    cy.get('[class="item-name"]').eq(1).click()
    cy.get('[class="ant-col css-1drr2mu"]').eq(4).click()
    cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should('have.text', 'Create Admin').click()

      cy.get('[class="ant-typography css-1drr2mu"]').should('have.text', 'Create Admin')
      cy.get('#firstName').type(firstnamedec)
      cy.wait(2000)
      // handle state Dropdown
      cy.dropdown(7, 8)
      cy.get('#lastName').type(lastnamedec)
      cy.get('#userName').type(firstnamedec + '01')
      cy.get('#email').type(firstnamedec + "@yopmail.com")
      cy.get('[class="form-control "]').type(phoneno)
      cy.get('#city').type(citynamedec)

      // handle gender dropdown...................................................................

      cy.dropdown(5, 1)
      cy.get('#zip').type(zipCode);
      cy.get('#address').type(adrees);
      cy.get('#dateOfBirth').type("2000-09-01")
      cy.get('[class="ant-form ant-form-vertical css-1drr2mu"]').click()

      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click().wait(3000)
      cy.toastermsg(1, 'Admin Created Successfully')
      cy.wait(5000)
      cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text", firstnamedec + "@yopmail.com")
      cy.get('[class="ant-select-selector"]').click()
      cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
      cy.wait(5000)
      // cy.get(initialLength).should('have.length', count + 1)

    })
  })
  it('Create new doctor in new tenant', () => {
    let firstnamedec = faker.person.firstName(); // Generate random first name
    const initialLength = '[class="ant-table-tbody"]>tr';
    cy.verifyUserRoleVisible('SuperAdmin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.get('[class="ant-col css-1drr2mu"]').eq(4).click()
    cy.wait(3000)
    cy.get('[class="nav flex-column nav-pills text-left nav"]>a').eq(1).click()
    // cy.headingstyle('Doctor')
    cy.SelectPageSizedropdown()
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length); // Store initial length
      let count = $el.length;
      // Step 2: Perform the action to add a new doctor
      cy.CreateDoctor(firstnamedec)
      cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1)
    });

  })
  it('Create new nurrse in new tenant', () => {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number();
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    let emergencyno = faker.phone.number({ style: 'national' });
    const initialLength = '[class="ant-table-tbody"]>tr'
    cy.verifyUserRoleVisible('SuperAdmin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.get('[class="ant-col css-1drr2mu"]').eq(4).click()
    cy.wait(3000)
    cy.get('[class="nav flex-column nav-pills text-left nav"]>a').eq(2).click()
    // cy.headingstyle('Doctor')
    // cy.SelectPageSizedropdown()
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length); // Store initial length
      let count = $el.length;
      // Step 2: Perform the action to add a new nurse
      cy.CreateNurse(firstnamedec,lastnamedec,phoneno,citynamedec,zipCode,adress,emergencyno)
      cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1)
    });

  })
it('Create new FrontDesk in new tenant', () => {
 let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let phoneno = faker.phone.number();
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');
    let emergencyno = faker.phone.number({ style: 'national' });
    const initialLength = '[class="ant-table-tbody"]>tr';

    cy.verifyUserRoleVisible('SuperAdmin')
    cy.get('[class="item-name"]').eq(1).click()
    cy.get('[class="ant-col css-1drr2mu"]').eq(4).click()
    cy.wait(3000)
    cy.get('[class="nav flex-column nav-pills text-left nav"]>a').eq(3).click()
    // cy.headingstyle('Doctor')
    //cy.SelectPageSizedropdown()
    cy.wait(5000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length); // Store initial length
      let count = $el.length;
      // Step 2: Perform the action to add a new Frontdesk
     cy.CreateFrontdesk(firstnamedec,lastnamedec,phoneno,citynamedec,zipCode,adress,emergencyno)
      cy.wait(5000)
      cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text", firstnamedec + "@yopmail.com")
      cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).should('have.length', count + 1)
    });

  })
})  