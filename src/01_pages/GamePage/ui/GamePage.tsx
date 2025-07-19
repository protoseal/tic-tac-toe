import { GameBoard } from "@03_features/GameBoard/ui/GameBoard"
import { BoardFactory } from "@05_shared/lib/BoardFactory"
import { CellFactory } from "@05_shared/lib/CellFactory"
import { Game } from "@05_shared/lib/Game"
import { LeaderboardRepository } from "@05_shared/lib/LeaderboardRepository"
import { PlayerFactory } from "@05_shared/lib/PlayerFactory"
import { type Coordinates, PlayerSymbol } from "@05_shared/models/global"
import { UILayout } from "@05_shared/ui/UILayout"
import { type FC, useEffect, useState } from "react"

export const GamePage: FC = () => {
  const game = new Game({
    boardFactory: new BoardFactory(),
    boardSize: 3,
    playerFactory: new PlayerFactory(),
    players: { bob: PlayerSymbol.X, alice: PlayerSymbol.O },
    cellFactory: new CellFactory(),
    leaderboardRepository: new LeaderboardRepository(),
  })

  const [cells, setCells] = useState(game.board.cells)

  const handleMakeMove = (coordinates: Coordinates) => {
    game.makeMove(coordinates)
    setCells(game.board.cells)
  }

  useEffect(() => {
    game.start()
  }, [])

  return (
    <UILayout as="main">
      <GameBoard cells={cells} handleMakeMove={handleMakeMove} />
    </UILayout>
  )
}
