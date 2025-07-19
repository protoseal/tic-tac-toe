import type { CellMatrix } from "./board"
import type { Coordinates } from "./global"

export interface IBoardRenderer {
  setupEventListeners(): void
  destroy(): void
  render(boardCells: CellMatrix): void
}

export interface BoardRendererProps {
  canvas: HTMLCanvasElement
  clickHandler(coordinates: Coordinates): void
  size: number
}
