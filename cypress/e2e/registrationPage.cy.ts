import { ROUTES_PATHS } from "../../src/05_shared/config"
import { Selectors } from "../fixtures/constants"

describe("Registration page", () => {
  beforeEach(() => {
    cy.visit(ROUTES_PATHS.index)
  })

  it("should load the registration page", () => {
    cy.get(Selectors.REGISTRATION_PAGE).should("be.visible")
  })

  it("should registration player", () => {
    cy.registrationPlayers()
    cy.url().should("include", ROUTES_PATHS.game)
  })
})
