import { PlayerSymbol } from "05_shared/models/global"

import { PlayerFactory } from "../PlayerFactory"

const xPlayerConfig = { name: "Player1", playerSymbol: PlayerSymbol.X }
const oPlayerConfig = { name: "Player2", playerSymbol: PlayerSymbol.O }

describe("PlayerFactory", () => {
  it("create X & O players", () => {
    const playerX = PlayerFactory.createPlayer(xPlayerConfig)
    const playerO = PlayerFactory.createPlayer(oPlayerConfig)

    expect(playerX.name).toBe(xPlayerConfig.name)
    expect(playerX.symbol).toBe(xPlayerConfig.playerSymbol)

    expect(playerO.name).toBe(oPlayerConfig.name)
    expect(playerO.symbol).toBe(oPlayerConfig.playerSymbol)
  })
})
