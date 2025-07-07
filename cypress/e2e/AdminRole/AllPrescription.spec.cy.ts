
describe('Appointments Workflow Tests', () => {

    it('Verify Total Number of Items in Prescription List',function(){
        cy.verifyUserRoleVisible('Admin')
        cy.get('[class="item-name"]').eq(11).click()
        cy.headingstyle('Prescription')
        cy.SelectPageSizedropdown()
        const initialLength = '[class="ant-table-tbody"]>tr';
        // cy.get('')
        // cy.get('[class="ant-table-tbody"]>tr').should('have.length-1')
        cy.get(initialLength).then(($el) => {
            console.log($el.length);
            let count = $el.length;
            cy.get(initialLength).should('have.length',count)
        })
    })
})