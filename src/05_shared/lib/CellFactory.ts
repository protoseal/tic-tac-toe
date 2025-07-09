import type { ICell } from "05_shared/models/cell"
import type { Coordinates } from "05_shared/models/global"

import { Cell } from "./Cell"

export class CellFactory {
  public static create(coordinates: Coordinates): ICell {
    return new Cell(coordinates)
  }
}
