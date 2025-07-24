import type { PlayerSymbol } from "./global"

export interface IPlayer {
  readonly name: string
  readonly symbol: PlayerSymbol
}

export interface PlayerProps {
  name: string
  symbol: PlayerSymbol
}
