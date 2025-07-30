import { Selectors } from "../fixtures/constants"

describe("Game page", () => {
  beforeEach(() => {
    cy.registrationPlayers()
  })

  it("should page load", () => {
    cy.get(Selectors.GAME_PAGE).should("be.visible")
  })

  it("should winner modal view for 3x3 game board", () => {
    cy.get(Selectors.CURRENT_PLAYER_NAME).then(($playerNameElement) => {
      const winnerName = $playerNameElement.text().trim()

      cy.makeMoves("winner")

      cy.get(Selectors.WINNER_MODAL_TITLE)
        .should("be.visible")
        .and("include.text", winnerName)
    })
  })

  it("should draw modal view for 3x3 game board", () => {
    cy.makeMoves("draw")

    cy.get(Selectors.WINNER_MODAL_TITLE)
      .should("be.visible")
      .and("include.text", "Draw")
  })
})
