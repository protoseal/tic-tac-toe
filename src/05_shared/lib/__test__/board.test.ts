import type { BoardProps, IBoard } from "05_shared/models/board"
import { type Coordinates, PlayerSymbol } from "05_shared/models/global"

import { Board } from "../Board"
import { CellFactory } from "../CellFactory"

const boardProps: BoardProps = { size: 3, cellFactory: new CellFactory() }
const cellCoordinates: Coordinates = { row: 0, col: 0 }

describe("Board", () => {
  let board: IBoard

  beforeEach(() => {
    board = new Board(boardProps)
  })

  it("should create board", () => {
    expect(board.cells.length).not.toBe(0)
  })

  it("should get cell by coordinates", () => {
    const cell = board.getCell(cellCoordinates)
    expect(cell?.coordinates).toEqual(cellCoordinates)
  })

  it("should set symbol in cell", () => {
    board.setPlayerSymbolInCell(cellCoordinates, PlayerSymbol.X)
    const cell = board.getCell(cellCoordinates)

    expect(cell?.coordinates).toEqual(cellCoordinates)
    expect(cell?.symbol).toBe(PlayerSymbol.X)
  })

  it("should check row winner", () => {
    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: 0 }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check col winner", () => {
    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: 0, col: i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check main diagonal winner", () => {
    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check anti diagonal winner", () => {
    const size = boardProps.size

    for (let i = 0; i < size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: size - 1 - i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should select for selected cell", () => {
    const cell = board.getCell(cellCoordinates)

    board.setPlayerSymbolInCell(cellCoordinates, PlayerSymbol.X)
    expect(cell?.symbol).toBe(PlayerSymbol.X)

    board.setPlayerSymbolInCell(cellCoordinates, PlayerSymbol.O)
    expect(cell?.symbol).toBe(PlayerSymbol.X)
  })

  it("should reset board", () => {
    const coordinatesCell1 = { row: 0, col: 0 }
    const coordinatesCell2 = { row: 2, col: 2 }

    board.getCell(coordinatesCell1)
    board.getCell(coordinatesCell2)

    board.setPlayerSymbolInCell(coordinatesCell1, PlayerSymbol.X)
    board.setPlayerSymbolInCell(coordinatesCell2, PlayerSymbol.O)

    board.reset()

    expect(board.getCell(coordinatesCell1)?.symbol).toBeNull()
    expect(board.getCell(coordinatesCell2)?.symbol).toBeNull()
  })
})
