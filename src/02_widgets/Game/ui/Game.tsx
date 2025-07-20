import { CurrentPlayer } from "@03_features/CurrentPlayer"
import { GameBoard } from "@03_features/GameBoard/ui/GameBoard"
import { BoardFactory } from "@05_shared/lib/BoardFactory"
import { CellFactory } from "@05_shared/lib/CellFactory"
import { Game as GameService } from "@05_shared/lib/Game"
import { LeaderboardRepository } from "@05_shared/lib/LeaderboardRepository"
import { PlayerFactory } from "@05_shared/lib/PlayerFactory"
import { type Coordinates, PlayerSymbol } from "@05_shared/models/global"
import type { IPlayer } from "@05_shared/models/player"
import { type FC, useEffect, useState } from "react"

const BOARD_SIZE = 3

export const Game: FC = () => {
  const [game] = useState(
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

  const [cells, setCells] = useState(game.board.cells)
  const [activePlayer, setActivePlayer] = useState<IPlayer>(game.activePlayer)
  const [winner, setWinner] = useState<IPlayer | null>(null)
  const [isDraw, setIsDraw] = useState<boolean>(false)

  void winner
  void isDraw

  const handleMakeMove = (coordinates: Coordinates) => {
    game.makeMove(coordinates)

    setCells([...game.board.cells])
    setActivePlayer(game.activePlayer)
    setWinner(game.winner)
    setIsDraw(game.isDraw)
  }

  useEffect(() => {
    game.start()
  }, [game])

  return (
    <div className="flex flex-col gap-3">
      <CurrentPlayer currentPlayer={activePlayer} />
      <GameBoard
        size={BOARD_SIZE}
        cells={cells}
        handleMakeMove={handleMakeMove}
      />
    </div>
  )
}
