describe('All Invoice',function(){
   
    it('All invoice list',()=>{
   cy.verifyUserRoleVisible('Admin')
   cy.get('[class="item-name"]').eq(12).click()
   cy.get('[class="item-name"]').eq(13).click()
   cy.wait(3000)
   cy.SelectPageSizedropdown()
   
   const initialLength = '[class="ant-table-tbody"]>tr';
   // cy.get('[class="ant-table-tbody"]>tr').should('have.length-1')
   cy.get(initialLength).then(($el) => {
       console.log($el.length);
       let count = $el.length;
       cy.get(initialLength).should('have.length',count)
   })
})
})