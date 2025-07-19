import type { CellMatrix } from "@05_shared/models/board"
import type {
  BoardDrawIconProps,
  BoardRendererProps,
  IBoardRenderer,
} from "@05_shared/models/boardRenderer"
import type { ICell } from "@05_shared/models/cell"
import { type Coordinates, PlayerSymbol } from "@05_shared/models/global"

const symbolIconMap = {
  [PlayerSymbol.O]: "boardCircle",
  [PlayerSymbol.X]: "boardCross",
}

export class BoardRenderer implements IBoardRenderer {
  private readonly _PADDING: number = 5
  private readonly _CELL_SIZE: number = 100

  private readonly _canvas: HTMLCanvasElement
  private readonly _ctx: CanvasRenderingContext2D
  private _imageCache: Record<string, HTMLImageElement> = {}
  private readonly _clickHandler: (coordinates: Coordinates) => void

  constructor(props: BoardRendererProps) {
    this._canvas = props.canvas
    this._ctx = props.canvas.getContext("2d")!
    this._clickHandler = props.clickHandler

    const size = this._CELL_SIZE * props.size + this._PADDING * 2
    this._canvas.width = size
    this._canvas.height = size

    this._preloadIcons()
    this._setupEventListeners()
  }

  private _drawBoard(cells: CellMatrix): void {
    this._ctx.strokeStyle = "white"

    cells.flat().forEach((cell) => {
      this._drawCell(cell)
    })
  }

  private _drawCell(cell: ICell): void {
    const { row, col } = cell.coordinates

    const x = col * this._CELL_SIZE + this._PADDING
    const y = row * this._CELL_SIZE + this._PADDING

    this._ctx.strokeRect(x, y, this._CELL_SIZE, this._CELL_SIZE)
    if (cell.symbol) this._drawIcon({ x, y, symbol: cell.symbol })
  }

  private _drawIcon({ x, y, symbol }: BoardDrawIconProps): void {
    const iconName = symbolIconMap[symbol]
    const cacheImg = this._imageCache[iconName]

    if (!cacheImg) {
      console.warn(`Image not loaded: ${iconName}`)
      return
    }

    this._ctx.drawImage(cacheImg, x, y)
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

  protected _setupEventListeners(): void {
    this._canvas.addEventListener("click", this._handleCanvasClick.bind(this))
  }

  private _preloadIcons(): Promise<void[]> {
    const promises = Object.values(symbolIconMap).map((iconName) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          this._imageCache[iconName] = img
          resolve()
        }
        img.src = `icons/${iconName}.svg`
      })
    })

    return Promise.all(promises)
  }
}
