import { CellSymbol } from "05_shared/models/cell"
import type { Coordinates } from "05_shared/models/global"

import { CellFactory } from "../CellFactory"

const cellCoordinates: Coordinates = { row: 0, col: 0 }

describe("CellFactory", () => {
  it("should create cell", () => {
    const cell = CellFactory.create(cellCoordinates)
    expect(cell.coordinates).toEqual(cellCoordinates)
    expect(cell.symbol).toBe(CellSymbol.EMPTY)
  })
})
