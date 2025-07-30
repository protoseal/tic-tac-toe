import { ROUTES_PATHS } from "../../src/05_shared/config"

enum PlayerNames {
  Player1 = "Player1",
  Player2 = "Player2",
}

const createWinnerClicksTable = (cellWidth: number, cellHeight: number) => {
  return [
    { x: cellWidth * 0.5, y: cellHeight * 0.5 }, // 1,1 - row,col
    { x: cellWidth * 0.5, y: cellHeight * 1.5 }, // 2,1
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 1,2
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 2,2
    { x: cellWidth * 2.5, y: cellHeight * 0.5 }, // 1,3
  ]
}

describe("Leaderboard page", () => {
  beforeEach(() => {
    cy.visit(ROUTES_PATHS.index)
    cy.clearLocalStorage()

    // Registration players
    cy.get('[data-cy="first-player-name"]').type(PlayerNames.Player1)
    cy.get('[data-cy="second-player-name"').type(PlayerNames.Player2)
    cy.get('[data-cy="button-cross-symbol"').click()
    cy.get('[data-cy="play-button"').click()

    cy.get('[data-cy="leaderboard-link"]').click()
  })

  it("should page load", () => {
    // Check page load
    cy.get('[data-cy="leaderboard-page"]').should("be.visible")

    // Get leaderboard items and check player names and records
    cy.get('[data-cy="leaderboard-list-item"]')
      .should("have.length", 2)
      .each(($el, index) => {
        const playerName =
          index === 0 ? PlayerNames.Player1 : PlayerNames.Player2

        cy.wrap($el).should("contain", playerName).and("contain", "0")
      })
  })

  it("should increment winner's record in leaderboard", () => {
    // Start game
    cy.get('[data-cy="back-play-link"]').click()

    // Get current player name - he winner
    let winnerName: string
    cy.get('[data-cy="current-player-name"]').then(($nameElement) => {
      winnerName = $nameElement.text().trim()
    })

    // Set winner clicks
    cy.get('[data-cy="game-canvas"]').then(($canvas) => {
      const clicks = createWinnerClicksTable(
        $canvas.width()! / 3,
        $canvas.height()! / 3,
      )

      clicks.forEach((click) => {
        cy.wrap($canvas).click(click.x, click.y).wait(100)
      })
    })

    // Click play again and go leaderboard
    cy.get('[data-cy="play-again-button"]').click()
    cy.get('[data-cy="leaderboard-link"]').click()

    // Check leaderboard table
    cy.get('[data-cy="leaderboard-list-item"]')
      .should("have.length", 2)
      .each(($el, index) => {
        if (index === 0) {
          // Top 1 a have 1 win
          cy.wrap($el).should("contain", winnerName).and("contain", "1")
        } else {
          // Top 2 a have 0 win
          const otherPlayerName =
            winnerName === "Player1" ? "Player2" : "Player1"
          cy.wrap($el).should("contain", otherPlayerName).and("contain", "0")
        }
      })
  })
})
