describe('VigiTech App', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.url().should('include', 'localhost:4200');
  });

  it('should display the app title', () => {
    cy.get('h1').should('exist');
  });

  it('should have a valid page title', () => {
    cy.title().should('not.be.empty');
  });

});
