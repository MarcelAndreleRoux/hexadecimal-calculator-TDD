describe("Calculator Add Funtion", () => {
  afterEach(() => {
    cy.get('[data-testid="error-message"]').should("be.empty");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should subtract 1 with 1", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });

  it("should subtract 1A with 5", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="A"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="5"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "15");
  });

  it("should subtract 0 with 0", () => {
    cy.get('[data-testid="0"]').click();
    cy.get('[data-testid="-"]').click();
    cy.get('[data-testid="0"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });
});
