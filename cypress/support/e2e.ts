// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'

beforeEach(() => {
    cy.viewport(1400, 860)
    // cy.hitURLandLogin('drabhinnav00@yopmail.com','Abhinav@123')// doctor
    cy.hitURLandLogin('ahan.sharma0000@yopmail.com','Ahan@123')// admin
 //cy.hitURLandLogin('supportadmin@gsspatientvisit.com','supportadmin@123')// super admin
//     cy.visit('http://97.74.92.197:3001/login/')
//     // admin credential
//     cy.get('#username').type('rahul02@yopmail.com')
//     cy.get('#exampleInputPassword1').type('Rahul@123')
    
 //     // superadmin credential
 //     // cy.get('#username').type('supportadmin@gsspatientvisit.com')
 //     // cy.get('#exampleInputPassword1').type('supportadmin@123')
 //     cy.get('[class="btn btn-primary float-end btn btn-primary"]').click().wait(3000)


    });





