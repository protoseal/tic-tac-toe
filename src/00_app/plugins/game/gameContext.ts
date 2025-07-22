import type { IGame } from "@05_shared/models/game"
import { createContext } from "react"

interface Context {
  game: IGame
}

export const GameContext = createContext<Context | null>(null)
