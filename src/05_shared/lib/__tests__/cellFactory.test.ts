import type { Coordinates } from "@05_shared/models/global"

import { CellFactory } from "../CellFactory"

const cellCoordinates: Coordinates = { row: 0, col: 0 }

describe("CellFactory", () => {
  it("should create cell", () => {
    const cellFactory = new CellFactory()
    const cell = cellFactory.create(cellCoordinates)
    expect(cell.coordinates).toEqual(cellCoordinates)
    expect(cell.symbol).toBe(null)
  })
})
