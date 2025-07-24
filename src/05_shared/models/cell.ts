import { type Coordinates, PlayerSymbol } from "./global"

export interface ICell {
  readonly coordinates: Coordinates
  readonly symbol: PlayerSymbol | null
  setSymbol(value: PlayerSymbol | null): void
}
