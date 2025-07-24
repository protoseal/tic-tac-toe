import type { ICell } from "./cell"
import type { Coordinates } from "./global"

export interface ICellFactory {
  create(coordinates: Coordinates): ICell
}
