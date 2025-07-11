import { PlayerSymbol } from "05_shared/models/global"

import { PlayerFactory } from "../PlayerFactory"

const xPlayerConfig = { name: "Player1", symbol: PlayerSymbol.X }
const oPlayerConfig = { name: "Player2", symbol: PlayerSymbol.O }

describe("PlayerFactory", () => {
  it("create X & O players", () => {
    const playerFactory = new PlayerFactory()
    const playerX = playerFactory.create(xPlayerConfig)
    const playerO = playerFactory.create(oPlayerConfig)

    expect(playerX.name).toBe(xPlayerConfig.name)
    expect(playerX.symbol).toBe(xPlayerConfig.symbol)

    expect(playerO.name).toBe(oPlayerConfig.name)
    expect(playerO.symbol).toBe(oPlayerConfig.symbol)
  })
})
