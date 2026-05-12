import { faker } from '@faker-js/faker'

describe('All MasterTable list', function () {
  // Test 
  let testnum = faker.number.binary({ min: 0, max: 1000 })
  let medicinenum = faker.number.binary({ min: 0, max: 1000 })
  let drugunit = faker.number.binary({ min: 1, max: 10 })
  let quantity = faker.number.binary({ min: 10, max: 50 })
  const initialLength = '[class="ant-table-tbody"]>tr'


  it('Create new test', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(18).click()
    cy.get('[class="item-name"]').eq(19).click()
    cy.headingstyle('Tests')
    cy.SelectPageSizedropdown()
    cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      cy.CreateBT('Add Test');

      cy.get('[class="ant-typography css-1khm1u7"]').should('have.text', 'Add Test')
      cy.get('#name').type('test' + testnum)
      cy.get('#amount').type('1000')
      cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
      cy.toastermsg(1, 'Created Successfully')
      cy.SelectPageSizedropdown()
      cy.get(initialLength).should('have.length', count + 1)
    })
  })

  it('Update test', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(18).click()
    cy.get('[class="item-name"]').eq(19).click()
    cy.headingstyle('Tests')
    cy.SelectPageSizedropdown()
    cy.get('[class="anticon anticon-edit"]').last().click()
    cy.get('[class="ant-typography css-1khm1u7"]').should('have.text', 'Update Test')
    cy.get('#name').clear().type('UpdateTest' + testnum).wait(2000)
    cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
    cy.toastermsg(1, 'Updated Successfully')
  })
  it('Delete test', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(18).click()
    cy.get('[class="item-name"]').eq(19).click()
    cy.headingstyle('Tests')
    cy.SelectPageSizedropdown()
    cy.get(initialLength).then(($el) => {
      let count = $el.length;
      cy.get('[class="anticon anticon-delete"]').last().click().wait(3000)
      cy.get('[class="ant-btn css-1drr2mu ant-btn-default ant-btn-dangerous okBtn"]').click()
      cy.toastermsg(1, 'Deleted Successfully')
      cy.SelectPageSizedropdown()
      cy.get(initialLength).should('have.length', count - 1)
    })
  })
  it('Add new medicine', () => {
    cy.verifyUserRoleVisible('Admin')
    cy.get('[class="item-name"]').eq(18).click()
    cy.get('[class="item-name"]').eq(20).click()
    cy.headingstyle('Medicines')
    cy.SelectPageSizedropdown()
    cy.get(initialLength).then(($el) => {
      console.log($el.length);
      let count = $el.length;
      cy.CreateBT('Add Medicine')
      cy.get('#name').type('Test Medicine' + medicinenum)
      cy.get('#drugUnit').type(drugunit)
      cy.get('#qty').type(quantity)
      cy.get('#brand').type('Mankind')
      cy.dropdown(10, 0)
      cy.get('#price').type('500')
      cy.get('#category').type('General');
      cy.dropdown(7, 0)
      cy.get('#warning').type('Keep out of reach of children.')
      cy.get('#qty').type('{selectall}').type(quantity);
      cy.dropdown(6, 0)
      cy.get('#duration').type('5')
      cy.dropdown(10, 0)
      cy.get('#brand').type('{selectall}').type('Mankind')
      cy.get('#description').type('This medicine is used to treat various infections caused by bacteria. It belongs to a class of drugs called antibiotics and works by stopping the growth of bacteria.')
      cy.get('[class="ant-btn css-1khm1u7 ant-btn-primary"]').click()
      cy.toastermsg(1, 'Created Successfully').wait(3000)
      cy.SelectPageSizedropdown()
      cy.get(initialLength).should('have.length', count + 1)


    })
  })
})


