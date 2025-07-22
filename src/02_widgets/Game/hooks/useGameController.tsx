import { useGameContext } from "@05_shared/hooks/useGameContext"
import { useModalContext } from "@05_shared/hooks/useModalContext"
import { GameStatus } from "@05_shared/models/game"
import { type Coordinates, PlayerSymbol } from "@05_shared/models/global"
import type { IPlayer } from "@05_shared/models/player"
import { useEffect, useState } from "react"

import { GameWinnerModalContent } from "../ui/GameWinnerModalContent"

export const useGameController = () => {
  const { game } = useGameContext()
  const { openModal, closeModal } = useModalContext()

  /* TODO: Sync registration props and game. Use router params */
  game.setPlayers({ bob: PlayerSymbol.X, alice: PlayerSymbol.O })

  const [cells, setCells] = useState(game.board.cells)
  const [gameStatus, setGameStatus] = useState<GameStatus>(game.status)
  const [winner, setWinner] = useState<IPlayer | null>(null)
  const [isDraw, setIsDraw] = useState<boolean>(false)
  const [activePlayer, setActivePlayer] = useState<IPlayer>(game.activePlayer)

  const isWinnerModalOpen =
    gameStatus === GameStatus.stop && (isDraw || winner !== null)

  const syncGameStates = () => {
    setCells([...game.board.cells])
    setActivePlayer(game.activePlayer)
    setGameStatus(game.status)
    setWinner(game.winner)
    setIsDraw(game.isDraw)
  }

  const handleMakeMove = (coordinates: Coordinates) => {
    game.makeMove(coordinates)
    syncGameStates()
  }

  const handlePlayAgain = () => {
    game.reset()
    game.start()
    syncGameStates()
    closeModal()
  }

  /* Start game after ui load */
  useEffect(() => {
    game.start()
  }, [game])

  useEffect(() => {
    if (isWinnerModalOpen) {
      openModal(
        <GameWinnerModalContent
          winnerPlayerName={winner?.name}
          isDraw={isDraw}
          handlePlayAgain={handlePlayAgain}
        />,
      )
    }
  }, [isWinnerModalOpen])

  return {
    boardSize: game.board.size,
    cells,
    gameStatus,
    activePlayer,
    isDraw,
    winner,
    handleMakeMove,
  }
}
