describe("Calculator Add Funtion", () => {
  afterEach(() => {
    cy.get('[data-testid="error-message"]')
      .should("be.visible")
      .and("have.text", "Input number must be up to 2 digits");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add FFF with 1", () => {
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });

  it("should add 1 with FFF", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });
});
