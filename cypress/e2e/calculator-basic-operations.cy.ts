//calculator-basic-operations.cy.ts

describe("Calculator Display", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show initial display of 0", () => {
    cy.get('[data-testid="display-value"]')
      .should("be.visible")
      .and("have.text", "0");
  });

  it("should show error message when errors occur", () => {
    // You'll implement this later when you add error handling
    cy.get('[data-testid="error-message"]').should("be.empty");
  });
});
