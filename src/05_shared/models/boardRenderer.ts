import type { CellMatrix } from "./board"
import type { Coordinates, PlayerSymbol } from "./global"

export interface IBoardRenderer {
  destroy(): void
  render(boardCells: CellMatrix): void
}

export interface BoardRendererProps {
  canvas: HTMLCanvasElement
  clickHandler(coordinates: Coordinates): void
  size: number
}

export interface BoardDrawIconProps {
  x: number
  y: number
  symbol: PlayerSymbol
}
