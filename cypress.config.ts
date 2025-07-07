import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern:[
      '**/CreateAdmin.spec.cy.ts',
      '**/CreateDoctor.spec.cy.ts',
      '**/CreateNurse.spec.cy.ts',
      '**/CreateFrontDesk.spec.cy.ts',
      '**/CreatePatient.spec.cy.ts',
      '**/AllAppointments.spec.cy.ts',
      //'**/Billing.spec.cy.ts',
      '**/practice.spec.cy.ts',
      '**/Profile.spec.cy.ts',
      '**/Patients.spec.cy.ts',
      '**/AllAppointment.spec.cy.ts',
      '**/GivePrecription.spec.cy.ts',
      '**/Tenant.spec.cy.ts',
      '**/AllPrescription.spec.cy.ts',
      '**/Invoice.spec.cy.ts',
      '**/AllMasterTable.spec.cy.ts',
      '**/Practiceonmindset.spec.cy.ts',
      '**/Flipkart.spec.cy.ts',
      
      
      // '**/MasterTable.spec.cy.ts',
      
         ],
    setupNodeEvents(on, config) {
    // implement node event listeners here
  
    },
    experimentalRunAllSpecs: true,
    video: false,
    screenshotOnRunFailure: false,   
  },
});
