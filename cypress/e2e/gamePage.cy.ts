import { ROUTES_PATHS } from "../../src/05_shared/config"

const createWinnerClicksTable = (cellWidth: number, cellHeight: number) => {
  return [
    { x: cellWidth * 0.5, y: cellHeight * 0.5 }, // 1,1 - row,col
    { x: cellWidth * 0.5, y: cellHeight * 1.5 }, // 2,1
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 1,2
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 2,2
    { x: cellWidth * 2.5, y: cellHeight * 0.5 }, // 1,3
  ]
}

const createDrawClicksTable = (cellWidth: number, cellHeight: number) => {
  return [
    { x: cellWidth * 0.5, y: cellHeight * 0.5 }, // 1,1 - row,col
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 1,2
    { x: cellWidth * 2.5, y: cellHeight * 0.5 }, // 1,3

    { x: cellWidth * 1.5, y: cellHeight * 1.5 }, // 2,2
    { x: cellWidth * 0.5, y: cellHeight * 1.5 }, // 2,1
    { x: cellWidth * 2.5, y: cellHeight * 1.5 }, // 2,3

    { x: cellWidth * 1.5, y: cellHeight * 2.5 }, // 3,2
    { x: cellWidth * 0.5, y: cellHeight * 2.5 }, // 3,1
    { x: cellWidth * 2.5, y: cellHeight * 2.5 }, // 3,3
  ]
}

describe("Game page", () => {
  beforeEach(() => {
    cy.visit(ROUTES_PATHS.index)

    cy.get('[data-cy="first-player-name"]').type("Player1")
    cy.get('[data-cy="second-player-name"]').type("Player2")
    cy.get('[data-cy="button-cross-symbol"]').click()
    cy.get('[data-cy="play-button"]').click()
  })

  it("should page load", () => {
    cy.get('[data-cy="game-page"').should("be.visible")
  })

  it("should winner modal view for 3x3 game board", () => {
    cy.get('[data-cy="game-canvas"]').then(($canvas) => {
      cy.get('[data-cy="current-player-name"]').then(($playerNameElement) => {
        const currentPlayerName = $playerNameElement.text().trim()

        const clicks = createWinnerClicksTable(
          $canvas.width()! / 3,
          $canvas.height()! / 3,
        )

        clicks.forEach((click) => {
          cy.wrap($canvas).click(click.x, click.y).wait(100)
        })

        cy.get('[data-cy="winner-modal-title"]')
          .should("be.visible")
          .and("include.text", currentPlayerName)
      })
    })
  })

  it("should draw modal view for 3x3 game board", () => {
    cy.get('[data-cy="game-canvas"]').then(($canvas) => {
      const clicks = createDrawClicksTable(
        $canvas.width()! / 3,
        $canvas.height()! / 3,
      )

      clicks.forEach((click) => {
        cy.wrap($canvas).click(click.x, click.y)
      })

      cy.get('[data-cy="winner-modal-title"]')
        .should("be.visible")
        .and("include.text", "Draw")
    })
  })
})
