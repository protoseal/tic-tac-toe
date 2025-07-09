import { type Coordinates, PlayerSymbol } from "./global"

export enum CellSymbol {
  X = PlayerSymbol.X,
  O = PlayerSymbol.O,
  EMPTY = "EMPTY",
}

export interface ICell {
  readonly coordinates: Coordinates
  readonly symbol: CellSymbol
  setSymbol(value: CellSymbol): void
}
