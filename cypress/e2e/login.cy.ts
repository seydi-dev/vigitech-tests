describe('Login Component', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login form', () => {
    cy.get('#username').should('exist');
    cy.get('#password').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Se connecter');
  });

  it('should show error when fields are empty', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Veuillez remplir tous les champs');
  });

  it('should show error with invalid credentials', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Identifiants invalides');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('.success').should('contain', 'Connexion réussie');
  });

});
