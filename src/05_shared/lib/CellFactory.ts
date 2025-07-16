import type { ICell } from "@05_shared/models/cell"
import type { ICellFactory } from "@05_shared/models/cellFactory"
import type { Coordinates } from "@05_shared/models/global"

import { Cell } from "./Cell"

export class CellFactory implements ICellFactory {
  public create(coordinates: Coordinates): ICell {
    return new Cell(coordinates)
  }
}
