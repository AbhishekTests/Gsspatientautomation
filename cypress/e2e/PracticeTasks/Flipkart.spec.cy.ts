describe.skip('Flipkart',()=>{
it.skip('Flipkart test cases',()=>{
cy.visit('https://www.flipkart.com/')
// Hover on "Home & Furniture"
cy.get('._1XjE3T').eq(4).trigger('mouseover', { force: true })

// Find "Tools & Utility"
cy.get('._1BJVlg').then(($options) => {
  for (let i = 0; i < $options.length; i++) {
    const text = $options.eq(i).text().trim()

     if (text === 'Tools & Utility') {
      cy.wrap($options.eq(i)).trigger('mouseover', { force: true })
      break
    }
  }
})

// Wait briefly for the "Cloth Dryer Stand" option to appear
cy.wait(500) 
cy.contains('Cloth Dryer Stand').click({ force: true })
// cy.visit('https://www.flipkart.com/')
// cy.get('[class="_1XjE3T"]').eq(4).trigger('mouseover', { force: true });
// cy.get('[class="_1BJVlg"]').then(($options) => {
//     for (let i = 0; i < $options.length; i++) {
//       const text = $options.eq(i).text().trim();

//     if (text === 'Tools & Utility') {
//         cy.wrap($options.eq(i)).trigger('mouseover', { force: true });
//         cy.wait(3000)

//         // Once we hover over Tools & Utility, select Cloth Dryer Stand
//         cy.contains('[class="_3490ry"]').eq(7).click({ force: true });
//         break;  // Exit the loop after finding

//     }
//     }
})
// cy.get('[class="_1BJVlg"]').eq(6).trigger('mouseover', { force: true });
// cy.get('[class="_3490ry"]').eq(7).trigger('mouseover',{force:true}).click()
})
// })
