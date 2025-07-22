import { GameContext } from "@00_app/plugins/game/gameContext"
import { useContext } from "react"

export const useGameContext = () => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider")
  }

  return context
}
