import type { PlayerSymbol } from "../global"
import type { IPlayer } from "./player"

export interface IPlayerFactory {
  create(props: CreateProps): IPlayer
}

interface CreateProps {
  name: string
  playerSymbol: PlayerSymbol
}
