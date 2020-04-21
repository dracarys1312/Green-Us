describe('The Home Page', () => {
  it('successfully loads', () => {
	cy.visit('index.html')
	cy.get('div > a').contains('Sign Up').click()
	
	cy.get('#logo').click()
	cy.get('div > a').contains('Sign In').click()
	
	cy.get('#logo').click()
	cy.get('div > a').contains('Get Started').click()
})