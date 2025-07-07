describe('Admin Role Management Suite', () => {
  it('Create New Admin and Verify Successful Creation', function () {


    cy.verifyUserRoleVisible('Admin')

    //cy.get('[class="item-name"]').eq(1).click()
    // cy.headingstyle('Admin')
  })
  it('should show navigation bar with expected links', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('.item-name').should('be.visible');
    cy.get('.item-name').each(($el) => {
      cy.wrap($el).within(() => {
        cy.contains('Dashboard', { timeout: 10000 }).should('exist');
        cy.contains('Admins', { timeout: 10000 }).should('exist');
        cy.contains('Doctors', { timeout: 10000 }).should('exist');
        cy.contains('Nurses', { timeout: 10000 }).should('exist');
      });
    });
  });

  it('Practice if else', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('.item-name').eq(1).then(($btn) => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click()
        cy.verifyUserRoleVisible('Admin')
      } else {
        cy.log('Admin button is not visible')
      }
    })
  })

  it('Varify Patient analysis graph',()=>{ 
    cy.get('[class="ant-tag ant-tag-cyan css-1drr2mu"]').wait(3000).should('have.text','SuperAdmin').wait(30000)
    cy.get('[class="ri-hospital-line"]').eq(0).trigger('mouseover')
    //cy.get('[class="item-name"]').eq(1).should('have.text','Dashboard').wait(30000 )
    cy.get('[class="ant-select-selector"]').eq(0).wait(2000).click()
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
     .find('[class="ant-select-item-option-content"]').eq(4).click({ force: true })
    cy.get('[class="apexcharts-yaxis-title"]').should('have.text','Number of Patients')

    cy.get('[class="ant-select-selector"]').eq(1).wait(2000).click()
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible')
     .find('[class="ant-select-item-option-content"]').eq(3).click({ force: true }).wait(20000)
    cy.get('[class="apexcharts-inner apexcharts-graphical"]').should('be.visible')
   // cy.get('[class="apexcharts-inner apexcharts-graphical"]>line[class="apexcharts-xcrosshairs"]').trigger('mouseover')
   cy.get('.apexcharts-series path')  // more reliable
  .eq(0)                            // the first series
  .trigger('mouseover', { force: true });

  cy.get('.apexcharts-tooltip')
  .should('be.visible')
  .within(() => {
    cy.get('.apexcharts-tooltip-text-y-label') 
      .should('have.text', 'Patients:');
  });
  
  
     // cy.get('[class="apexcharts-tooltip-text-y-value"]').should('')
     // cy.get('[class=""]')
     // cy.dropdown(1,2)
     // cy.get('')
     // //  cy.get('[class="item-name"]').should('have.text','')
   
     // function getMatchingElement(locator: string, matchText: string): Cypress.Chainable<JQuery<HTMLElement>> {
     //   return cy.get(locator).filter((_, el) => {
     //   return el.textContent?.trim().toLowerCase() === matchText.toLowerCase();
                
                 
     // // return el.textContent?.trim().toUpperCase()=== matchText.toLocaleUpperCase();

    //   })
    //  }
  })
})




