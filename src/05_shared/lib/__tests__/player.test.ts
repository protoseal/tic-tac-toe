import { PlayerSymbol } from "@05_shared/models/global"

import { Player } from "../Player"

const playerConfig = { name: "user", symbol: PlayerSymbol.X }

describe("[Player]", () => {
  it("check correct player creation", () => {
    const player = new Player(playerConfig)
    expect(player.name).toBe(playerConfig.name)
    expect(player.symbol).toBe(playerConfig.symbol)
  })
})
