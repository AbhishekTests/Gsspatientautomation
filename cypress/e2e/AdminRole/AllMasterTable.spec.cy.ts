import { faker } from '@faker-js/faker'

describe('All MasterTable list',function(){
  // Test 
  let testnum =faker.number.binary({ min: 0, max: 2 })
  let medicinenum =faker.number.binary({ min: 0, max: 3 })
  let drugunit = faker.number.binary({min:1, max:5})
  let quantity = faker.number.binary({min:10, max:50})
  const initialLength = '[class="ant-table-tbody"]>tr'
 

it('Create new test',()=>{
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(17).click()
    cy.get('[class="item-name"]').eq(18).click()
    cy.headingstyle('Tests')
    cy.SelectPageSizedropdown()
    cy.get(initialLength).then(($el)=>{
       console.log($el.length);
       let count =$el.length;
    cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
    cy.get('[class="ant-typography css-1khm1u7"]').should('have.text','Add Test')
    cy.get('#name').type('test'+ testnum)
    cy.get('#amount').type('1000')
    cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
    cy.get(initialLength).should('have.length', count+1)
    cy.toastermsg(1,'Created Successfully')
})  
})  

it('Update test',()=>{
  cy.verifyUserRoleVisible('Admin')
  cy.get('[class="item-name"]').eq(17).click()
  cy.get('[class="item-name"]').eq(18).click()
  cy.headingstyle('Tests')
  cy.SelectPageSizedropdown()
  cy.get('[class="anticon anticon-edit"]').last().click()
  cy.get('[class="ant-typography css-1khm1u7"]').should('have.text','Update Test')
  cy.get('#name').clear().type('test'+ testnum).wait(2000)
  cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
  cy.toastermsg(1,'Updated Successfully') 
})
it('Delete test',()=>{
  cy.verifyUserRoleVisible('Admin')
  cy.get('[class="item-name"]').eq(17).click()
  cy.get('[class="item-name"]').eq(18).click()
  cy.headingstyle('Tests')
  cy.SelectPageSizedropdown()
  cy.get(initialLength).then(($el)=>{
  let count =$el.length;
  cy.get('[class="anticon anticon-delete"]').last().click().wait(3000)
  cy.get('[class="ant-btn css-1drr2mu ant-btn-default ant-btn-dangerous"]').click()
 // cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
  cy.toastermsg(1,'Deleted Successfully')
  cy.get(initialLength).should('have.length',count-1)
})
})
it('Add new medicine',()=>{
  cy.verifyUserRoleVisible('Admin')
  cy.get('[class="item-name"]').eq(17).click()
  cy.get('[class="item-name"]').eq(19).click()
  cy.headingstyle('Medicines')
  cy.SelectPageSizedropdown()
  cy.get(initialLength).then(($el)=>{
    console.log($el.length);
    let count =$el.length;
  cy.get('[class="ant-btn css-1drr2mu ant-btn-primary"]').click()
  cy.get('#name').type('Test Medicine'+medicinenum)
  cy.get('#drugUnit').type(drugunit)
  cy.get('#qty').type(quantity)
  cy.get('#brand').type('Mankind')
  cy.dropdown(10,0)
  cy.get('#price').type('500')
  cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
  cy.toastermsg(1,'Created Successfully')
  cy.get(initialLength).should('have.length',count+1)

  
})
})
})


