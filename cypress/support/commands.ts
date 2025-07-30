/// <reference types="cypress" />
import { ROUTES_PATHS } from "../../src/05_shared/config"
import { PlayersNames, Selectors } from "../fixtures/constants"
import {
  createDrawClicksTable,
  createWinnerClicksTable,
} from "../fixtures/gameUtils"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      registrationPlayers(): Chainable<void>
      makeMoves(type: "winner" | "draw"): Chainable<void>
    }
  }
}

Cypress.Commands.add("registrationPlayers", () => {
  cy.visit(ROUTES_PATHS.index)

  cy.get(Selectors.FIRST_PLAYER_NAME).type(PlayersNames.Player1)
  cy.get(Selectors.SECOND_PLAYER_NAME).type(PlayersNames.Player2)
  cy.get(Selectors.CROSS_SYMBOL_BUTTON).click()
  cy.get(Selectors.PLAY_BUTTON).click()
})

Cypress.Commands.add("makeMoves", (type) => {
  cy.get(Selectors.GAME_CANVAS).then(($canvas) => {
    const width = $canvas.width()! / 3
    const height = $canvas.height()! / 3

    const clicks =
      type === "winner"
        ? createWinnerClicksTable(width, height)
        : createDrawClicksTable(width, height)

    clicks.forEach((click) => {
      cy.wrap($canvas).click(click.x, click.y).wait(100)
    })
  })
})
