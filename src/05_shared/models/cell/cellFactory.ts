import type { ICell } from "./cell"

export interface ICellFactory {
  createCellsFromLength(length: number): ICell[]
}
