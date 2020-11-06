describe('User-Onboarding Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  const nameInput = () => cy.get('input[name=name]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')

  it('should do some basic math', () => {
    expect(1+1).to.equal(2); //assertions
    expect(1+2).to.not.equal(4);
    expect({}).not.to.equal({}); // === is true (deep equality)
    expect({}).to.eql({}) // == is true
  });

  it('should display the expected elements', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
  })
  
})