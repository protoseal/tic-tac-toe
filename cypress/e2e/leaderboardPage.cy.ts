import { PlayersNames, Selectors } from "../fixtures/constants"
import { getOpponentName } from "../fixtures/gameUtils"

describe("Leaderboard page", () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.registrationPlayers()
    cy.get(Selectors.LEADERBOARD_LINK).click()
  })

  it("should page load", () => {
    cy.get(Selectors.LEADERBOARD_PAGE).should("be.visible")

    cy.get(Selectors.LEADERBOARD_ITEM)
      .should("have.length", 2)
      .each(($el, index) => {
        const playerName =
          index === 0 ? PlayersNames.Player1 : PlayersNames.Player2
        cy.wrap($el).should("contain", playerName).and("contain", "0")
      })
  })

  it("should increment winner's record in leaderboard", () => {
    cy.get(Selectors.BACK_PLAY_LINK).click()

    let winnerName: string
    let oponnentName: string

    cy.get(Selectors.CURRENT_PLAYER_NAME).then(($nameElement) => {
      winnerName = $nameElement.text().trim()
      oponnentName = getOpponentName(winnerName)
    })

    cy.makeMoves("winner")

    cy.get(Selectors.PLAY_AGAIN_BUTTON).click()
    cy.get(Selectors.LEADERBOARD_LINK).click()

    cy.get(Selectors.LEADERBOARD_ITEM)
      .should("have.length", 2)
      .each(($el, index) => {
        const playerName = index === 0 ? winnerName : oponnentName
        const record = index === 0 ? "1" : "0"

        cy.wrap($el).should("contain", playerName).and("contain", record)
      })
  })
})
