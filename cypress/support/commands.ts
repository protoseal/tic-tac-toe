/// <reference types="cypress" />
import { Selectors } from "../fixtures/constants"
import { createWinnerClicksTable } from "../fixtures/game"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      makeWinningMoves(): Chainable<void>
    }
  }
}

Cypress.Commands.add("makeWinningMoves", () => {
  cy.get(Selectors.GAME_CANVAS).then(($canvas) => {
    const clicks = createWinnerClicksTable(
      $canvas.width()! / 3,
      $canvas.height()! / 3,
    )
    clicks.forEach((click) => {
      cy.wrap($canvas).click(click.x, click.y).wait(100)
    })
  })
})
