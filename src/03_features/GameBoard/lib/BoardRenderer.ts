import type { CellMatrix } from "@05_shared/models/board"
import type {
  BoardRendererProps,
  IBoardRenderer,
} from "@05_shared/models/boardRenderer"
import type { ICell } from "@05_shared/models/cell"
import { type Coordinates } from "@05_shared/models/global"

export class BoardRenderer implements IBoardRenderer {
  private readonly _PADDING: number = 5
  private readonly _CELL_SIZE: number = 100

  private readonly _canvas: HTMLCanvasElement
  private readonly _ctx: CanvasRenderingContext2D
  private readonly _clickHandler: (coordinates: Coordinates) => void

  constructor(props: BoardRendererProps) {
    this._canvas = props.canvas
    this._ctx = props.canvas.getContext("2d")!

    const size = this._CELL_SIZE * props.size + this._PADDING * 2
    this._canvas.width = size
    this._canvas.height = size

    this._clickHandler = props.clickHandler
  }

  private _drawBoard(cells: CellMatrix): void {
    this._ctx.strokeStyle = "white"

    cells.flat().forEach((cell) => {
      this._drawCell(cell)
    })
  }

  private _drawCell(cell: ICell): void {
    const { row, col } = cell.coordinates

    if (cell.symbol) {
      this._ctx.fillStyle = "red"
      this._ctx.fillRect(
        col * this._CELL_SIZE + this._PADDING,
        row * this._CELL_SIZE + this._PADDING,
        this._CELL_SIZE,
        this._CELL_SIZE,
      )
      return
    }

    this._ctx.strokeRect(
      col * this._CELL_SIZE + this._PADDING,
      row * this._CELL_SIZE + this._PADDING,
      this._CELL_SIZE,
      this._CELL_SIZE,
    )
  }

  public setupEventListeners(): void {
    this._canvas.addEventListener("click", this._handleCanvasClick.bind(this))
  }

  private _handleCanvasClick(event: MouseEvent): void {
    const rect = this._canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const col = Math.floor((x - this._PADDING) / this._CELL_SIZE)
    const row = Math.floor((y - this._PADDING) / this._CELL_SIZE)

    if (this._clickHandler) this._clickHandler({ col, row })
  }

  public render(cells: CellMatrix): void {
    this._clearCanvas()
    this._drawBoard(cells)
  }

  private _clearCanvas(): void {
    this._ctx.reset()
  }

  public destroy(): void {
    this._canvas.removeEventListener(
      "click",
      this._handleCanvasClick.bind(this),
    )
  }
}
