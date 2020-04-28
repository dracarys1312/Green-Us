describe('The Home Page', () => {
  it('successfully loads', () => {
	cy.visit('signup.html')
	cy.get('#account').type('maidoan')
	cy.get('#email').type('maidt.bi9162@st.usth.edu.vn')
	cy.get('#pass').type('123456')
	cy.get('#passcfm').type('123456')
})