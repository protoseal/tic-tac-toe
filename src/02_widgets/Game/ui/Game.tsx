import { CurrentPlayer } from "@03_features/CurrentPlayer"
import { GameBoard } from "@03_features/GameBoard"
import { type FC } from "react"

import { useGameController } from "../hooks/useGameController"

export const Game: FC = () => {
  const { boardSize, cells, activePlayer, handleMakeMove } = useGameController()

  return (
    <div className="flex flex-col gap-5">
      <CurrentPlayer currentPlayer={activePlayer} />
      <GameBoard
        size={boardSize}
        cells={cells}
        handleMakeMove={handleMakeMove}
      />
    </div>
  )
}
