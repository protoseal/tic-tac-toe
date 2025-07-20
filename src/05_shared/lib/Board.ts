import type { BoardProps, CellMatrix, IBoard } from "@05_shared/models/board"
import type { ICell } from "@05_shared/models/cell"
import type { ICellFactory } from "@05_shared/models/cellFactory"
import type { Coordinates, PlayerSymbol } from "@05_shared/models/global"

export class Board implements IBoard {
  private _size: number
  private _cells: CellMatrix

  private _cellFactory: ICellFactory

  constructor(props: BoardProps) {
    this._size = props.size
    this._cellFactory = props.cellFactory
    this._cells = this._createCellMatrix()
  }

  get cells(): CellMatrix {
    return this._cells
  }

  get isAllCellsSelected(): boolean {
    const array = this._toFlatCells()
    return array.every((cell) => cell.symbol !== null)
  }

  private _toFlatCells(): ICell[] {
    return this._cells.flat()
  }

  private _createCellMatrix(): CellMatrix {
    const matrix: CellMatrix = []

    for (let row = 0; row < this._size; row++) {
      const rowCells: ICell[] = []

      for (let col = 0; col < this._size; col++) {
        const coordinates = { row, col }
        const cell = this._cellFactory.create(coordinates)
        rowCells.push(cell)
      }

      matrix.push(rowCells)
    }

    return matrix
  }

  public setPlayerSymbolInCell(
    coordinates: Coordinates,
    symbol: PlayerSymbol,
  ): void {
    const cell = this.getCell(coordinates)
    if (!cell || cell.symbol) return

    cell.setSymbol(symbol)
  }

  public getCell(coordinates: Coordinates): ICell | null {
    const { row, col } = coordinates
    if (row < 0 || row >= this._size || col < 0 || col >= this._size) {
      return null
    }

    return this._cells[row][col]
  }

  public checkWinner(): PlayerSymbol | null {
    const size = this._size

    for (let i = 0; i < size; i++) {
      const row = this._cells[i]
      const rowWinner = this._checkLine(row)
      if (rowWinner) return rowWinner

      const column = this._cells.map((row) => row[i])
      const columnWinner = this._checkLine(column)
      if (columnWinner) return columnWinner
    }

    const mainDiagonal = this._cells.map((row, i) => row[i])
    const mainDiagonalWinner = this._checkLine(mainDiagonal)
    if (mainDiagonalWinner) return mainDiagonalWinner

    const antiDiagonal = this._cells.map((row, i) => row[size - 1 - i])
    const antiDiagonalWinner = this._checkLine(antiDiagonal)
    if (antiDiagonalWinner) return antiDiagonalWinner

    return null
  }

  private _checkLine(line: ICell[]): PlayerSymbol | null {
    if (line.length < this._size) return null

    const firstSymbol = line[0].symbol
    if (!firstSymbol) return null

    const isWin = line.every((cell) => cell.symbol === firstSymbol)
    return isWin ? firstSymbol : null
  }

  public reset(): void {
    this._cells = this._createCellMatrix()
  }
}
