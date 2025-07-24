import type { ICell } from "./cell"
import type { ICellFactory } from "./cellFactory"
import type { Coordinates, PlayerSymbol } from "./global"

export type CellMatrix = ICell[][]

export interface IBoard {
  readonly size: number
  readonly cells: CellMatrix
  readonly isAllCellsSelected: boolean
  getCell(coordinates: Coordinates): ICell | null
  setPlayerSymbolInCell(coordinates: Coordinates, symbol: PlayerSymbol): void
  checkWinner(): PlayerSymbol | null
  reset(): void
}

export interface BoardProps {
  size: number
  cellFactory: ICellFactory
}
