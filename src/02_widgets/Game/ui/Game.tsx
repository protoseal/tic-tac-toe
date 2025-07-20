import { CurrentPlayer } from "@03_features/CurrentPlayer"
import { GameBoard } from "@03_features/GameBoard"
import type { IGame } from "@05_shared/models/game"
import { type Coordinates } from "@05_shared/models/global"
import type { IPlayer } from "@05_shared/models/player"
import { type FC, useEffect, useState } from "react"

interface Props {
  gameService: IGame
}

export const Game: FC<Props> = ({ gameService }) => {
  const [cells, setCells] = useState(gameService.board.cells)
  const [activePlayer, setActivePlayer] = useState<IPlayer>(
    gameService.activePlayer,
  )
  const [winner, setWinner] = useState<IPlayer | null>(null)
  const [isDraw, setIsDraw] = useState<boolean>(false)

  void winner
  void isDraw

  const handleMakeMove = (coordinates: Coordinates) => {
    gameService.makeMove(coordinates)

    setCells([...gameService.board.cells])
    setActivePlayer(gameService.activePlayer)
    setWinner(gameService.winner)
    setIsDraw(gameService.isDraw)
  }

  useEffect(() => {
    gameService.start()
  }, [gameService])

  return (
    <div className="flex flex-col gap-3">
      <CurrentPlayer currentPlayer={activePlayer} />
      <GameBoard
        size={gameService.board.size}
        cells={cells}
        handleMakeMove={handleMakeMove}
      />
    </div>
  )
}
