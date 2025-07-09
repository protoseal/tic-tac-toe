import type { BoardProps } from "05_shared/models/board"
import { type Coordinates, PlayerSymbol } from "05_shared/models/global"

import { Board } from "../Board"
import { CellFactory } from "../CellFactory"

const boardProps: BoardProps = { size: 3, cellFactory: new CellFactory() }
const cellCoordinates: Coordinates = { row: 0, col: 0 }

describe("Board", () => {
  it("should create board", () => {
    const board = new Board(boardProps)
    expect(board.cells.length).not.toBe(0)
  })

  it("should get cell by coordinates", () => {
    const board = new Board(boardProps)
    const cell = board.getCell(cellCoordinates)
    expect(cell?.coordinates).toEqual(cellCoordinates)
  })

  it("should set symbol in cell", () => {
    const board = new Board(boardProps)
    board.setPlayerSymbolInCell(cellCoordinates, PlayerSymbol.X)
    const cell = board.getCell(cellCoordinates)

    expect(cell?.coordinates).toEqual(cellCoordinates)
    expect(cell?.symbol).toBe(PlayerSymbol.X)
  })

  it("should check row winner", () => {
    const board = new Board(boardProps)

    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: 0 }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check col winner", () => {
    const board = new Board(boardProps)

    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: 0, col: i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check main diagonal winner", () => {
    const board = new Board(boardProps)

    for (let i = 0; i < boardProps.size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })

  it("should check anti diagonal winner", () => {
    const board = new Board(boardProps)
    const size = boardProps.size

    for (let i = 0; i < size; i++) {
      board.setPlayerSymbolInCell({ row: i, col: size - 1 - i }, PlayerSymbol.X)
    }

    const winner = board.checkWinner()
    expect(winner).toBe(PlayerSymbol.X)
  })
})
