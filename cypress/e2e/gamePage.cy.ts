import { Selectors } from "../fixtures/constants"

describe("Game page", () => {
  beforeEach(() => {
    cy.registrationPlayers()
  })

  it("should page load", () => {
    cy.get(Selectors.GAME_PAGE).should("be.visible")
  })

  it("should winner modal view for 3x3 game board", () => {
    cy.get('[data-cy="current-player-name"]').then(($playerNameElement) => {
      const winnerName = $playerNameElement.text().trim()

      cy.makeMoves("winner")

      cy.get('[data-cy="winner-modal-title"]')
        .should("be.visible")
        .and("include.text", winnerName)
    })
  })

  it("should draw modal view for 3x3 game board", () => {
    cy.makeMoves("draw")

    cy.get('[data-cy="winner-modal-title"]')
      .should("be.visible")
      .and("include.text", "Draw")
  })
})
