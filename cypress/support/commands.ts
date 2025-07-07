
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
  interface Chainable {
    dropdown(index: number, index1: number): Chainable<Element>;
    datecal(index: number, text: string): Chainable<Element>;
    toastermsg(index: number, text: string): Chainable<Element>;
    headingstyle(text: string): Chainable<Element>;
    verifyUserRoleVisible(text: string): Chainable<Element>;
    selectpateintid(index: number): Chainable<Element>;
    SelectPageSizedropdown(): Chainable<Element>;
    hitURLandLogin(text1:string,text2:string):Chainable<Element>; 
    visitpage(URL:string):Chainable<Element>;
    waitforloader(text:string):Chainable<Element>; 
    ProfileName(text:string):Chainable<Element>; 
    CreateDoctor(text:string):Chainable<Element>
    CreateNurse(firstname:string,lastname:string,phonenumber:string,city:string,zipCode:string,adress:string,emergencyno:string):Chainable<Element>
    CreateFrontdesk(firstname:string,lastname:string,phonenumber:string,city:string,zipCode:string,adress:string,emergencyno:string):Chainable<Element>
    CreateAdmin(firstname:string,lastname:string,phonenumber:string,city:string,zipCode:string,adress:string):Chainable<Element>
    Multiselectdropdown(dropdownIndex: number, ...optionIndexes: number[]): Chainable<Element>;

  }
}
//firstname,lastname,phonenumber,city,zipCode,adress,emergencyno
Cypress.Commands.add('dropdown', (index, index1) => {
  cy.get('.ant-form-item-control-input').eq(index).click().wait(2000)
  cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
    .find('[class="ant-select-item-option-content"]').eq(index1).click({ force: true })
})
Cypress.Commands.add('datecal', (index, text) => {
  cy.get('.ant-form-item-control-input-content').eq(index).click().wait(5000)
  cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden)')
    .find('[class="ant-picker-now-btn"]').should('have.text', text).click() //Today
})
Cypress.Commands.add('toastermsg', (index, text) => {
  const toastselector = '[class="ant-message-notice-content"]>div>span';
  cy.get(toastselector, { timeout: 3000 }).eq(index).then(($toast) => {
    const message = $toast.text();
    if (message === text) {
      cy.log('Success message verified ' + message);
    } else if (message.includes(text)) {
      cy.log('Error message verified').wait(3000);
    } else {
      throw new Error('Unexpected toast message: ' + message);
    }
  });
});
Cypress.Commands.add('headingstyle', (text) => {
  cy.get('[class="heading-style"]').should('have.text', text)
})
Cypress.Commands.add('verifyUserRoleVisible', (text) => {
  cy.get('[class="ant-tag ant-tag-cyan css-1drr2mu"]').wait(3000).should('have.text', text)
})
Cypress.Commands.add('waitforloader', (selector: string = '.loader')=>{
  //cy.waitUntil(() => cy.get(selector).should('not.exist'));
 // cy.get('[class="sign-in-from"]',selector,{timeout: 10000}).should('not.exist');
 cy.get(selector, {timeout: 10000}).should('not.exist');
})
Cypress.Commands.add('selectpateintid', (index) => {
  cy.get('[class="ant-input-affix-wrapper css-1drr2mu ant-input-outlined"]').eq(index).type('100000').wait(2000)
  cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
    .find('.ant-select-item-option>div').should('be.visible').last().click({ force: true })
})
Cypress.Commands.add('SelectPageSizedropdown', () => {
  cy.get('[class="ant-select-selector"]').click()
  cy.get('.ant-select-dropdown:not(ant-select-dropdown-hidden)')
    .find('[class="ant-select-item-option-content"]').last().click().should('have.text', '100 / page')
})
Cypress.Commands.add('visitpage',(URL)=>{
  cy.visit(URL)
 })
 Cypress.Commands.add('hitURLandLogin',(text1,text2)=>{
 cy.visitpage('http://97.74.92.197:3001/login/')
 cy.waitforloader('[class="ant-spin-dot ant-spin-dot-spin"]')
 cy.get('#username').type(text1)
 cy.get('#exampleInputPassword1').type(text2)
 cy.get('[class="btn btn-primary float-end btn btn-primary"]').click()
 })
 Cypress.Commands.add('ProfileName', (text) => {
  cy.get('.mt-3 > p').should('have.text', text)
  
})

Cypress.Commands.add('CreateDoctor', (userName) => {
  //let firstnamedec = faker.person.firstName();
  cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]')
        .should('have.text', 'Create Doctor')
        .click()
      cy.get('[class="ant-typography css-1drr2mu"]').should('have.text', 'Register Doctor');
      cy.get('#userName').type('Dr' + userName).should('be.visible');
      cy.get('#email').type(userName + '01@yopmail.com').should('be.visible');
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click();
      // Wait for success message
      cy.wait(2000)
      cy.toastermsg(1, 'Link send successfully')
  
})
Cypress.Commands.add('CreateNurse', (firstname,lastname,phonenumber,city,zipCode,adress,emergencyno) => {
  cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.get('[class="ant-typography css-1drr2mu"]').should("have.text", "Create Nurse")
      cy.get('#firstName').type(firstname)
      cy.wait(2000)
      cy.get('.ant-form-item-control-input-content').eq(7).click()
      cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').should('be.visible').eq(8).click({ force: true })

      cy.get('#lastName').type(lastname);
      cy.get('#userName').type(firstname + '01');
      cy.get('#email').type(firstname + "@yopmail.com");
      cy.get('[class="form-control "]').type(phonenumber);
      cy.get('#city').type(city);
      cy.get('.ant-form-item-control-input-content').eq(13).click()
      cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').should('be.visible').eq(1).click({ force: true })
      cy.get('#zip').type(zipCode);
      cy.get('#address').type(adress);
      cy.get('#dateOfBirth').type("2000-09-01");
      cy.get('#emergencyNumber').type(emergencyno);
      cy.get('[class="ant-form-item-control-input-content"]').eq(5).click()
      cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').eq(1).click({ force: true })
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.wait(2000)
      cy.toastermsg(1, 'Nurse Created Successfully')
})

Cypress.Commands.add('CreateFrontdesk', (firstname,lastname,phonenumber,city,zipCode,adress,emergencyno) => {
  cy.wait(2000)
   cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.get('[class="ant-typography css-1drr2mu"]').should("have.text", "Create FrontDesk")
      cy.get('#firstName').type(firstname)
      cy.wait(2000)
      cy.get('.ant-form-item-control-input-content').eq(7).click()
      cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').should('be.visible').eq(8).click({ force: true })
      cy.get('#lastName').type(lastname)
      cy.get('#userName').type(firstname + '01')
      cy.get('#email').type(firstname + "@yopmail.com")
      cy.get('[class="form-control "]').type(phonenumber)
      cy.get('#city').type(city)
      cy.dropdown(13, 1)
      cy.get('#zip').type(zipCode);
      cy.get('#address').type(adress);
      cy.get('#dateOfBirth').type("2002-07-01");
      cy.get('#emergencyNumber').type(emergencyno);
      cy.get('[class="ant-form-item-control-input-content"]').eq(5).click()
      cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
        .find('[class="ant-select-item-option-content"]').eq(1).click({ force: true })
      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.toastermsg(1,'FrontDesk Created Successfully')
})
Cypress.Commands.add('CreateAdmin', (firstname,lastname,phonenumber,city,zipCode,adress) => {
  cy.wait(2000)
   cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
      cy.get('[class="ant-typography css-1drr2mu"]').should("have.text", "Create Admin")
      cy.get('#firstName').type(firstname)
      cy.wait(2000)
      // handle state Dropdown
      cy.dropdown(7,8)
      cy.get('#lastName').type(lastname)
      cy.get('#userName').type(firstname + '01')
      cy.get('#email').type(firstname + "@yopmail.com")
      cy.get('[class="form-control "]').type(phonenumber)
      cy.get('#city').type(city)
      // handle gender dropdown...................................................................
      cy.dropdown(5,1)
      cy.get('#zip').type(zipCode);
      cy.get('#dateOfBirth').type("2000-09-01")
      cy.get('#address').type(adress);
      cy.get('[class="ant-form ant-form-vertical css-1drr2mu"]').click()

      cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click().wait(3000)
      cy.toastermsg(1, 'Admin Created Successfully')
      cy.wait(5000)
      cy.get('[class="ant-table-body"]').get('[class="ant-table-cell ant-table-cell-ellipsis"]').eq(3).should("have.text", firstname + "@yopmail.com")
})
Cypress.Commands.add('Multiselectdropdown', (dropdownIndex: number, ...optionIndexes: number[]) => {
  // Click on the specified dropdown
  cy.get('.ant-select-selector').eq(dropdownIndex).click();
  // Ensure dropdown is visible
  cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
    .should('be.visible')
    .within(() => {
      optionIndexes.forEach(index => {
        cy.get('[class="ant-select-item-option-content"]').eq(index).click();
      });
    });

  // Close dropdown by pressing ESC or clicking outside (optional)
 // cy.get('body').click(0, 0);
});
 
 