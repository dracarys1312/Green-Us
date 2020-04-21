describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('main_page.html')
	cy.get('#feedback_icon').click()
	cy.get('#feedback_content').type('Hello World')
	cy.get('#submit_btn').click()
	cy.get('.close').click()
	cy.get('.icon').invoke('show').click({multiple:true;force:true})
  })
})