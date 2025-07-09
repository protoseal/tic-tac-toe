import { CellSymbol, type ICell } from "05_shared/models/cell"
import type { Coordinates } from "05_shared/models/global"

export class Cell implements ICell {
  private readonly _coordinates: Coordinates
  private _symbol: CellSymbol = CellSymbol.EMPTY

  constructor(coordinates: Coordinates) {
    this._coordinates = coordinates
  }

  get coordinates() {
    return this._coordinates
  }

  get symbol() {
    return this._symbol
  }

  set symbol(value: CellSymbol) {
    this._symbol = value
  }
}
