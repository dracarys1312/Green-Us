describe('The Home Page', () => {
  it('successfully loads', () => {
	cy.visit('signin.html')
	cy.get('#account').type('maidoan')
	cy.get('#pass').type('123456')
	
	cy.get('#txtSignUp').click()
	
	cy.get('#txtSignUp').click()
	
	cy.go('back')
	cy.get('#forgot').click()
})