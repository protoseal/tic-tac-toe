import type { CellMatrix } from "@05_shared/models/board"
import type { IBoardRenderer } from "@05_shared/models/boardRenderer"
import type { Coordinates } from "@05_shared/models/global"
import { type FC, useEffect, useRef } from "react"

import { GameBoardRenderer } from "../lib/GameBoardRenderer"

interface Props {
  size: number
  cells: CellMatrix
  handleMakeMove(coordinates: Coordinates): void
}

export const GameBoard: FC<Props> = ({ cells, size, handleMakeMove }) => {
  const renderer = useRef<IBoardRenderer | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (!canvasRef.current || isInitialized.current) return

    const boardRenderer = new GameBoardRenderer({
      canvas: canvasRef.current,
      size,
      clickHandler: handleMakeMove,
    })

    renderer.current = boardRenderer
    isInitialized.current = true

    return () => {
      renderer.current?.destroy()
    }
  }, [size, handleMakeMove])

  useEffect(() => {
    renderer.current?.render(cells)
  }, [cells])

  return (
    <div className="mx-auto">
      <canvas ref={canvasRef} id="game-canvas" data-cy="game-canvas" />
    </div>
  )
}
