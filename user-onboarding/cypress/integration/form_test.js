describe('User-Onboarding Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  const nameInput = () => cy.get('input[name=name]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')
  const submitBtn = () => cy.get(`button[id="submitBtn"]`)

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
  });
  describe('Filling out inputs and canceling', () => {
    it('can get to the correct url', () => {
      cy.url().should('include', 'localhost');
    });
    it('submit button should be disabled on the initial load', () => {
      submitBtn().should('be.disabled');
    })
    it('should type stuff in the inputs', () => {
      nameInput()
        .should('have.value', '')
        .type('Hi how are you?')
        .should('have.value', 'Hi how are you?')
      
      emailInput()
        .should('have.value', '')
        .type('jon@jon.com')
        .should('have.value', 'jon@jon.com')

      passwordInput()
        .should('have.value', '')
        .type('Hi how are you doing?')
        .should('have.value', 'Hi how are you doing?')
    })
    it('should enable submit with all fields filled in', () => {
      nameInput().type('Clare')
      emailInput().type('Clare@Jackson.com')
      passwordInput().type('Jackson')
      submitBtn().should('not.be.disabled')
    })
  })
   
});