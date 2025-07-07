
import { faker } from '@faker-js/faker'

describe.skip('Mindset care',()=>{
const number = faker.number.binary({ min: 0, max: 200 })
it('contact Info',()=>{

cy.visitpage('https://staging-mindset.care/prequalify')
cy.get('[name="FullName"]').type('Abhishek yadav')
cy.get('[name="Email"]').type('Abhishek'+number+'@yopmail.com')
cy.get('[name="PhoneNumber"]').type('9879889988')
cy.get('[class="css-hlgwow"]').eq(0).click()//[class=" css-1xc3v61-indicatorContainer"]    //[class=" css-1jqq78o-placeholder"]
cy.get('[class="css-evt87y-menu"]').should('be.visible')
.find('[class="css-10wo9uf-option"]').eq(2).click()

/// General Eligibility
cy.get('[class="chakra-radio__control css-1ik0kuw"]').eq(0).click()
cy.get('[type="radio"]').eq(0).filter('[value="true"]')
  .should('be.checked');
cy.get('[name="DateOfBirth"]').type('12/23/2000')

cy.get('[class="chakra-radio__control css-1ik0kuw"]').eq(3).click({ force: true })
cy.get('input[type="radio"]').eq(3)
  .should('have.attr', 'value', 'false') // ✅ correct value check on NO
  .should('be.checked');  

cy.get('[class="chakra-radio__control css-1ik0kuw"]').eq(5).click()
cy.get('[type="radio"]').eq(5)
 .should('have.attr', 'value', 'false') // ✅ correct value check on NO
  .should('be.checked');  

cy.get('[class="chakra-radio__control css-1ik0kuw"]').eq(6).click()
cy.get('[type="radio"]').eq(6).filter('[value="true"]')
  .should('be.checked'); // ✅ correct value check on Yes

cy.get('[class="chakra-radio__control css-1ik0kuw"]').eq(9).click()
cy.get('[type="radio"]').eq(9)
 .should('have.attr', 'value', 'false') // ✅ correct value check NO
  .should('be.checked');  
// cy.get('[class="chakra-input css-1cjy4zv"]').eq(3).type('40')
// cy.get('[class="chakra-input css-qluo93"]').type('20')
cy.get('[class="css-hlgwow"]').eq(1).click()
cy.get('[class="css-8992fk-menu"]').should('be.visible')
.find('[class="css-10wo9uf-option"]').eq(2).click()
cy.get('[class="chakra-button css-xjd42n"]').click()

cy.get('h2.chakra-heading')  // or use cy.contains('h2', 'You Are')
  .invoke('text')
  .then((text) => {
  
cy.log(text)
 expect(text).to.include('You Are');
    
})


cy.get('a.chakra-button').invoke('text').then((text)=>{
cy.log(text)
expect(text).to.include('Create')
})
cy.get('[class="chakra-button css-1aqiu1a"]').click()
//  Verify the email and first name + last name visible in form with URL Parameter

cy.url().then((url) => {
      // Create a URL object to easily extract query parameters
      const parsedUrl = new URL(url);

      const fullName = parsedUrl.searchParams.get('fullName') || '';
      const email = parsedUrl.searchParams.get('email') || '';
 
      const [firstNameFromUrl, lastNameFromUrl] = fullName.split(' ');

      // Verify First Name
      cy.get('[name="FirstName"]').invoke('val')
        .should('eq', firstNameFromUrl);

      // Verify Last Name
      cy.get('[name="LastName"]').invoke('val')
        .should('eq', lastNameFromUrl);

      // Verify Email
      cy.get('[name="Email"]').invoke('val')
        .should('eq', email);
    });


 }) 
         

// it.only('Verify first title text',()=>{
// cy.visitpage('https://staging-mindset.care/congrats?id=&fullName=test+gg&email=test878787%40yopmail.com&encryptedToken=UIaQRuJnp1J9jX3nmBY26b0OAggrE%2FQkZbEkKLM2nBISU6j9b%2B%2BIhBfM2NvxiR8OS0R84VOb%2Bhtfdcqu0LIDP%2FzYC8dsYL0QPjBRp0%2BpM44%3D&userName=test878787%40yopmail.com&phoneNumber=9879089709&eid=&prefillValuesForTesting=false')


// })


})