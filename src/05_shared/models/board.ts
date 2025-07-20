import type { ICell } from "./cell"
import type { ICellFactory } from "./cellFactory"
import type { Coordinates, PlayerSymbol } from "./global"

export type CellMatrix = ICell[][]

export interface IBoard {
  readonly size: number
  readonly cells: CellMatrix
  readonly isAllCellsSelected: boolean
  checkWinner(): PlayerSymbol | null
  setPlayerSymbolInCell(coordinates: Coordinates, symbol: PlayerSymbol): void
  getCell(coordinates: Coordinates): ICell | null
  reset(): void
}

export interface BoardProps {
  size: number
  cellFactory: ICellFactory
}
