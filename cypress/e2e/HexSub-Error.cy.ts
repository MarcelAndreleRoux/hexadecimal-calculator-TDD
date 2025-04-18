describe("Calculator Add Funtion", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should subtract FFF with 1", () => {
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
    cy.get('[data-testid="error-message"]')
      .should("be.visible")
      .and("have.text", "Input number must be up to 2 digits");
  });

  it("should subtract 1 with FFF", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
    cy.get('[data-testid="error-message"]')
      .should("be.visible")
      .and("have.text", "Input number must be up to 2 digits");
  });

  it("should subtract 1 with FFF", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
    cy.get('[data-testid="error-message"]')
      .should("be.visible")
      .and("have.text", "Result is negative");
  });
});
