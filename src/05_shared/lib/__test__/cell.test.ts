import { CellSymbol } from "05_shared/models/cell"
import { type Coordinates } from "05_shared/models/global"

import { Cell } from "../Cell"

const cellCoordinates: Coordinates = { row: 0, col: 0 }

describe("Cell", () => {
  it("should create cell", () => {
    const cell = new Cell(cellCoordinates)

    expect(cell.coordinates).toEqual(cellCoordinates)
    expect(cell.symbol).toBe(CellSymbol.EMPTY)
  })

  it("should set cell symbol", () => {
    const cell = new Cell(cellCoordinates)
    cell.setSymbol(CellSymbol.O)
    expect(cell.symbol).toBe(CellSymbol.O)
  })
})
