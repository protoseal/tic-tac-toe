import { Game } from "@02_widgets/Game"
import { BoardFactory } from "@05_shared/lib/BoardFactory"
import { CellFactory } from "@05_shared/lib/CellFactory"
import { Game as GameService } from "@05_shared/lib/Game"
import { LeaderboardRepository } from "@05_shared/lib/LeaderboardRepository"
import { PlayerFactory } from "@05_shared/lib/PlayerFactory"
import { PlayerSymbol } from "@05_shared/models/global"
import { UILayout } from "@05_shared/ui/UILayout"
import { type FC, useState } from "react"

const BOARD_SIZE = 3

export const GamePage: FC = () => {
  const [gameService] = useState(
    () =>
      new GameService({
        boardFactory: new BoardFactory(),
        boardSize: BOARD_SIZE,
        playerFactory: new PlayerFactory(),
        players: { bob: PlayerSymbol.X, alice: PlayerSymbol.O },
        cellFactory: new CellFactory(),
        leaderboardRepository: new LeaderboardRepository(),
      }),
  )

  return (
    <UILayout
      as="main"
      className="flex min-h-screen items-center justify-center">
      <Game gameService={gameService} />
    </UILayout>
  )
}
