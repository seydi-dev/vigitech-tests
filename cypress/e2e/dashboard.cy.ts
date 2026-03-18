describe('Dashboard Component', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the dashboard title', () => {
    cy.get('.dashboard-container h1').should('contain', 'Tableau de bord');
  });

  it('should display 4 stat cards', () => {
    cy.get('.stat-card').should('have.length', 4);
  });

  it('should display rondes effectuées stat', () => {
    cy.get('.stat-card').first().should('contain', '42');
  });

  it('should display all stat labels', () => {
    cy.get('.stat-card').eq(0).should('contain', 'Rondes effectuées');
    cy.get('.stat-card').eq(1).should('contain', 'Sites actifs');
    cy.get('.stat-card').eq(2).should('contain', 'Agents en service');
    cy.get('.stat-card').eq(3).should('contain', 'Alertes');
  });

});
