import { BoardFactory } from "../BoardFactory"
import { CellFactory } from "../CellFactory"

const boardSize = 3

describe("BoardFactory", () => {
  it("should create board", () => {
    const boardFactory = new BoardFactory()
    const cellFactory = new CellFactory()
    const board = boardFactory.create({ size: boardSize, cellFactory })

    expect(board.cells.length).toBe(boardSize)
  })
})
