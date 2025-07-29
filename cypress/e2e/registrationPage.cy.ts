import { ROUTES_PATHS } from "../../src/05_shared/config"

describe("Registration page", () => {
  beforeEach(() => {
    cy.visit(ROUTES_PATHS.index)
  })

  it("should load the registration page", () => {
    cy.get('[data-cy="registration-page"]').should("be.visible")
  })

  it("should registration player", () => {
    cy.get('[data-cy="first-player-name"]').type("Player1")
    cy.get('[data-cy="play-button"').should("be.disabled")

    cy.get('[data-cy="second-player-name"').type("Player2")
    cy.get('[data-cy="play-button"').should("be.disabled")

    cy.get('[data-cy="button-cross-symbol"').click()
    cy.get('[data-cy="play-button"').should("not.be.disabled")

    cy.get('[data-cy="play-button"').click()

    cy.url().should("include", ROUTES_PATHS.game)
  })
})
