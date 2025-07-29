describe("Homepage", () => {
  it("should load the homepage and display welcome text", () => {
    cy.visit("/")
    cy.contains("Vite + React").should("be.visible")
  })
})
