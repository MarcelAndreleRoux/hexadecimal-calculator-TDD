describe("Calculator Add Funtion", () => {
  afterEach(() => {
    cy.get('[data-testid="error-message"]').should("be.empty");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add 1 with 1", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "2");
  });

  it("should add FF with FF", () => {
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "1FE");
  });

  it("should add 0 with 0", () => {
    cy.get('[data-testid="0"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="0"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });

  it("should add 1 with FF", () => {
    cy.get('[data-testid="1"]').click();
    cy.get('[data-testid="+"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="F"]').click();
    cy.get('[data-testid="equals-btn"]').click();
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "100");
  });
});
