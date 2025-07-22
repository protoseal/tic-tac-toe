import { BoardFactory } from "@05_shared/lib/BoardFactory"
import { CellFactory } from "@05_shared/lib/CellFactory"
import { Game } from "@05_shared/lib/Game"
import { LeaderboardRepository } from "@05_shared/lib/LeaderboardRepository"
import { PlayerFactory } from "@05_shared/lib/PlayerFactory"
import { type FC, type ReactNode } from "react"

import { GameContext } from "./gameContext"

interface GameProviderProps {
  children: ReactNode
  boardSize: number
}

export const GameProvider: FC<GameProviderProps> = ({
  children,
  boardSize,
}) => {
  const game = new Game({
    boardFactory: new BoardFactory(),
    playerFactory: new PlayerFactory(),
    cellFactory: new CellFactory(),
    leaderboardRepository: new LeaderboardRepository(),
    boardSize,
  })

  return (
    <GameContext.Provider value={{ game }}>{children}</GameContext.Provider>
  )
}
