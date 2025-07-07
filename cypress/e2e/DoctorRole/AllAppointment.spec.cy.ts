import { faker } from '@faker-js/faker'

describe('Appointments Workflow Tests', () => {
  const initialLength = '[class="ant-table-tbody"]>tr';
  it('Create New Appointment and Confirm Successful Submission', function () {
    let lastnamedec = faker.person.lastName();
    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(6).click()
    cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(0).click()
    cy.headingstyle('Appointments').wait(3000)
    //  cy.SelectPageSizedropdown()
      cy.wait(5000)
      cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').should('have.text', 'Add New')
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.get('[class="ant-typography css-1drr2mu"]').eq(0).should('have.text', 'Appointment')
      cy.selectpateintid(0)
      cy.wait(3000)
      cy.get('[class="ant-col ant-col-9 ant-form-item-label css-1drr2mu"]').should('have.text', 'Appointments')
      cy.dropdown(18,2)  // Handle speciality field
      cy.get('#lastName').clear().type(lastnamedec)
      cy.dropdown(19,0) //handle referd to dropdown
      cy.wait(5000)                 
      cy.datecal(20,'Today') // handle appointment date 
      cy.get('#reasonForAppoinment').type('Dark spots on the face')
      cy.datecal(21, 'Now') //  handle Appointment time
      cy.dropdown(26, 1) // Handle Language dropdown
     
      cy.dropdown(28, 5) // Handle Test Dropdown
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(2).should('have.text', 'Submit').click()
       cy.wait(3000)
      cy.toastermsg(1,'Created Successfully')
      cy.SelectPageSizedropdown()
      cy.get(initialLength).should('have.length', count + 1)
    })
  })
  it('Should successfully update Appointment details', function () {
    let firstnamedec = faker.person.firstName();
    let lastnamedec = faker.person.lastName();
    let citynamedec = faker.location.city();
    let adress = faker.location.streetAddress(true);
    let zipCode = faker.location.zipCode('######');

    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(6).click()
    cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(0).click()
    cy.headingstyle('Appointments')
    cy.wait(3000)
    cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(1).click()

    cy.get('#city').clear().type(citynamedec)
    cy.get('#address').clear().type(adress);

    cy.dropdown(25, 0)//Handle BloodGroup Dropdown
    cy.dropdown(27, 5)// Handle Test Dropdown
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').eq(2).should('have.text', 'Update').click()
    cy.toastermsg(1, 'Updated Successfully')

  })
  it('Cancel Appointment Successfully and Verify status is cancelled', function () {
    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(6).click()
    cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(0).click()
    cy.headingstyle('Appointments')
    
      cy.get('[class="ant-tag ant-tag-blue css-1drr2mu"]').eq(2).click()
      cy.get('[class="ant-btn css-1drr2mu ant-btn-default ant-btn-dangerous"]').click()
      cy.toastermsg(1, 'Cancelled Successfully')
      cy.get('[class="ant-tag ant-tag-volcano css-1drr2mu"]>span>span').eq(0).should('have.text','Cancelled')
      //cy.get(initialLength).should('have.length', count - 1)
  })
  it('Verify Total Number of Items in Today’s List', function () {
    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(6).click()
    cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(1).click()
    cy.headingstyle('Today').wait(3000)
    cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      if(count == 1) {
        cy.get(initialLength).should('not.exist');
        cy.log('Inside count is equal to 1')
      }else{
        cy.log('I am inside else command')
        cy.get(initialLength).should('have.length', count)
      }
    })
  })
  it('Verify Total Number of Items in Umcoming List', function () {
    const pagination = '.ant-pagination-total-text';
    cy.verifyUserRoleVisible('Doctor')
    cy.get('[class="item-name"]').eq(6).click()
    cy.get('[class="accordion-collapse collapse show"]>ul>li').eq(2).click()
    cy.headingstyle('Upcoming')
    cy.get(initialLength).then(($el) => {
      // console.log($el.length);
    let count = $el.length;
    // if(count=== 2){
    //   cy.get(pagination).should('not.exist');
    //   cy.get(initialLength).should('not.exist');
    // }else if(pagination){
    // 5000cy.get('[class="ant-select-selector"]').click()
    // cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
    // .find('[class="ant-select-item-option-content"]').last().click().should('have.text','100 / page')
    // cy.wait()
    cy.get(initialLength).should('have.length', count)
    })
  })
})


